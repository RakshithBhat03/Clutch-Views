import { DEFAULT_USER_STATE } from "../constants/constants";
export const userReducer = (state, action) => {
  switch (action.type) {
    case "ENTER_NAME":
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, userName: action.payload })
      );
      return { ...state, userName: action.payload };
    case "REGISTER":
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state, isRegistered: true })
      );
      return { ...state, isRegistered: true };
    case "GET_USER":
      const user =
        JSON.parse(localStorage.getItem("user")) ?? DEFAULT_USER_STATE;
      return { ...user };

    default:
      return { ...state };
  }
};
