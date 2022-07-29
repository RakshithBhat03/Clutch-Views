import { useUser } from "../../context";
import "./Onboarding.css";
function Onboarding() {
  const { user, dispatch } = useUser();
  const { userName } = user;
  return (
    <div className="onboarding display-flex flex-col align-items-center gap-2">
      <p className="onboarding-text txt-white">Hello, what's your name?</p>
      <input
        type="text"
        className="onboarding-name txt-center pb-5"
        onChange={(e) =>
          dispatch({ type: "ENTER_NAME", payload: e.target.value })
        }
        value={userName}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (userName !== "") {
              dispatch({ type: "REGISTER" });
            }
          }
        }}
      />
    </div>
  );
}

export { Onboarding };
