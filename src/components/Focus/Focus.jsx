import { useEffect, useReducer } from "react";
import { focusReducer } from "../../reducers/focusReducer";
import { DEFAULT_FOCUS_STATE } from "../../constants/constants";
import "./Focus.css";
import { FocusInput } from "./FocusInput";
import { FocusDisplay } from "./FocusDisplay";

function Focus() {
  const [focus, dispatch] = useReducer(focusReducer, DEFAULT_FOCUS_STATE);
  const { isFocus } = focus;
  useEffect(() => {
    dispatch({ type: "GET_FOCUS" });
  }, []);
  return (
    <div className="focus-wrapper display-flex flex-col mt-15 txt-white">
      {!isFocus && <FocusInput focusProp={{ focus, dispatch }} />}
      {isFocus && <FocusDisplay focusProp={{ focus, dispatch }} />}
    </div>
  );
}

export { Focus };
