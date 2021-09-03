import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { LoginScreen } from "../components/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} />
          <PrivateRoute path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

/*

*/
