import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicRoutes from "./public.routes";
import Dashboard from "./dashboards/client";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Dashboard} />
        <Route path="/advisor" component={Dashboard} />
        <Route path="/client" component={Dashboard} />
        <Route path="/" component={PublicRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
