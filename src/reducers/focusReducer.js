export const focusReducer = (state, action) => {
  switch (action.type) {
    case "FOCUS_INPUT":
      localStorage.setItem("FOCUS_TEXT", action.payload);
      return { ...state, focusText: action.payload };
    case "TOGGLE_FOCUS":
      localStorage.setItem("IS_FOCUS", !state.isFocus);
      return { ...state, isFocus: !state.isFocus };
    case "TOGGLE_CHECKED":
      localStorage.setItem("IS_CHECKED", !state.isChecked);
      return { ...state, isChecked: !state.isChecked };
    case "CLEAR_CHECKED":
      localStorage.removeItem("IS_CHECKED");
      return { ...state, isChecked: false };
    case "CLEAR_FOCUS":
      localStorage.removeItem("IS_FOCUS");
      return { ...state, isFocus: false };
    case "CLEAR_FOCUS_INPUT":
      localStorage.removeItem("FOCUS_TEXT");
      return { ...state, focusText: "" };
    case "GET_FOCUS":
      const isFocus = localStorage.getItem("IS_FOCUS") ?? false;
      const isChecked = localStorage.getItem("IS_CHECKED") ?? false;
      const focusText = localStorage.getItem("FOCUS_TEXT") ?? "";
      return {
        ...state,
        isFocus: JSON.parse(isFocus),
        isChecked: JSON.parse(isChecked),
        focusText: focusText,
      };
    default:
      return { ...state };
  }
};
