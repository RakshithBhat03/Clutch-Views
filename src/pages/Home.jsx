import { useEffect } from "react";
import { Time, Quote, Weather, Focus } from "../components/";
import { Onboarding } from "../components/Onboarding/Onboarding";
import { UseUser } from "../context/User";
import "./Home.css";
function Home() {
  const { user, dispatch } = UseUser();
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
          <Time />
          <Focus />
          <Quote />
          <Weather />
        </>
      )}
    </div>
  );
}

export { Home };
