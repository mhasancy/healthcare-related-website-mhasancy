import React from "react";
import useAuth from "../../../contexts/useAuth";
import SignUp from "../SignUp/SignUp";

const UserAuthorize = () => {
  const { isLogin, toggleSignInAndUp } = useAuth();
  return (
    <div>
      <SignUp></SignUp>
    </div>
  );
};

export default UserAuthorize;
