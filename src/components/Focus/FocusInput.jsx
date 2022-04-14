import "./Focus.css";
function FocusInput({ focusProp }) {
  const { focus, dispatch } = focusProp;
  const { focusText } = focus;

  return (
    <div className="focus-input display-flex flex-col gap-2">
      <p className="focus-question txt-white">
        What's your main focus for today?
      </p>
      <input
        className="focus-input txt-center pb-5"
        type="text"
        value={focusText}
        onChange={(e) =>
          dispatch({ type: "FOCUS_INPUT", payload: e.target.value })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (focusText !== "") {
              dispatch({ type: "TOGGLE_FOCUS" });
            }
          }
        }}
      />
    </div>
  );
}

export { FocusInput };
