import { useEffect } from "react";
import { useAuth, useUser } from "../../context";
import "./Success.css";
const Success = ({ close }) => {
  const { dispatch } = useUser();
  const { currentUser } = useAuth();
  useEffect(() => {
    currentUser?.uid &&
      dispatch({ type: "ENTER_NAME", payload: currentUser?.displayName });
  }, [currentUser]); // eslint-disable-line
  return (
    <div className="display-flex justify-content-center align-items-center flex-col gap-2">
      <i className="fa-solid fa-circle-check icon-success txt-white"></i>
      <span className="txt-success txt-white">Success!</span>
      <button className="btn btn--md btn-continue " onClick={close}>
        Continue
      </button>
    </div>
  );
};

export { Success };
