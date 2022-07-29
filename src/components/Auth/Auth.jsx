import { useState } from "react";
import { useAuth } from "../../context";
import { Login, Modal, Signup, Success } from "../";
import "./Auth.css";
const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tab, setTab] = useState("login");
  const { currentUser, logout } = useAuth();
  const switchTab = (tab) => setTab(tab);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {}
  };

  return (
    <div className="ml-9 mt-9 auth-wrapper">
      {currentUser?.uid ? (
        <button
          onClick={handleLogout}
          className="txt-white txt-sm txt-semibold btn-auth px-7 py-4">
          Logout
        </button>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="txt-white txt-sm txt-semibold btn-auth px-7 py-4">
          Login
        </button>
      )}
      <Modal open={isModalOpen} close={() => setIsModalOpen(false)}>
        {!currentUser?.uid && (
          <div className="display-flex gap-1">
            <button
              onClick={() => switchTab("login")}
              className={`btn-tab txt-white txt-semibold txt-md px-7 py-3 ${
                tab === "login" && "tab-highlight"
              }`}>
              Login
            </button>
            <button
              onClick={() => switchTab("signup")}
              className={`btn-tab txt-white txt-semibold txt-md px-7 py-3 ${
                tab === "signup" && "tab-highlight"
              }`}>
              Sign Up
            </button>
          </div>
        )}
        {!currentUser?.uid ? (
          tab === "login" ? (
            <Login />
          ) : (
            <Signup />
          )
        ) : (
          <Success close={() => setIsModalOpen(false)} />
        )}
      </Modal>
    </div>
  );
};

export { Auth };
