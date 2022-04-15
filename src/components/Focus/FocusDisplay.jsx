import { APPRECIATION } from "../../constants/constants";
import "./Focus.css";
function FocusDisplay({ focusProp }) {
  const { focus, dispatch } = focusProp;
  const { focusText, isChecked } = focus;

  return (
    <div className="focus-display display-flex flex-col align-items-center ">
      <p className="focus-heading txt-lg mb-9">Today's Focus</p>
      <div className="focus-task display-flex align-items-center gap-1">
        <label className="display-flex align-items-center gap-1 py-5">
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "TOGGLE_CHECKED" })}
            checked={isChecked}
            className="focus-checkbox"
          />
        </label>
        <p className={`focus-task txt-md pb-4 ${isChecked ? `slashed` : ""}`}>
          {focusText}
        </p>
        <button
          className="focus-edit txt-white "
          onClick={() => {
            dispatch({ type: "TOGGLE_FOCUS" });
            dispatch({ type: "CLEAR_CHECKED" });
          }}>
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="focus-delete txt-white "
          onClick={() => {
            dispatch({ type: "CLEAR_FOCUS" });
            dispatch({ type: "CLEAR_FOCUS_INPUT" });
            dispatch({ type: "CLEAR_CHECKED" });
          }}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <p
        className={`focus-appreciation mt-9 ${
          isChecked ? `appreciation-active` : ""
        }`}>
        {APPRECIATION[Math.floor(Math.random() * APPRECIATION.length)]}
      </p>
    </div>
  );
}

export { FocusDisplay };
