import { useContext, createContext, useReducer } from "react";
import { DEFAULT_USER_STATE } from "../constants/constants";
import { userReducer } from "../reducers/userReducer";
const UserContext = createContext(DEFAULT_USER_STATE);
const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, DEFAULT_USER_STATE);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
const UseUser = () => useContext(UserContext);
export { UseUser, UserProvider };
