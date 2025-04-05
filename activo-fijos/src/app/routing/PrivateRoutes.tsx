import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/menu-test" />
      <Redirect from="/auth" to="/dashboard" />
      <Redirect exact from="/" to="/dashboard" />
      <Redirect to="error/404" />
    </Switch>
  );
}
