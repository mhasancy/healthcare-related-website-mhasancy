//imported file
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

//use auth context

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
