import { useEffect } from "react";
import { Time, Quote, Weather, Focus, Todo } from "../components/";
import { Auth } from "../components/Auth/Auth";
import { Onboarding } from "../components/Onboarding/Onboarding";
import { useUser } from "../context";
import "./Home.css";
function Home() {
  const { user, dispatch } = useUser();
  const { isRegistered } = user;
  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, [dispatch]);
  return (
    <div className="home-wrapper">
      {!isRegistered ? (
        <Onboarding />
      ) : (
        <>
          <Auth />
          <Time />
          <Focus />
          <Quote />
          <Weather />
          <Todo />
        </>
      )}
    </div>
  );
}

export { Home };
