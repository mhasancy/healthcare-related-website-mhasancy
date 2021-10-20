//imported file
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../contexts/useAuth";

//private route
const PrivateRoute = ({ children, ...rest }) => {
  //destructuring
  const { user, isLoading } = useAuth();
  //isLoading condition
  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
