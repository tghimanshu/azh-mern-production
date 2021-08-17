import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicRoutes from "./public.routes";
import Dashboard from "./dashboards/client";
import { FinancialLiteracy } from "public/Pages/FinancialLiteracy";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Dashboard} />
        <Route path="/advisor" component={Dashboard} />
        <Route path="/client" component={Dashboard} />
        <Route path="/financial-literacy" component={FinancialLiteracy} />
        <Route path="/" component={PublicRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
