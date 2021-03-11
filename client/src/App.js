import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicRoutes from "./public.routes";
// import Admin from "./admin/admin";
import Client from "./dashboards/client";
// import Advisor from "./advisor/advisor";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Client} />
        <Route path="/advisor" component={Client} />
        <Route path="/client" component={Client} />
        <Route path="/" component={PublicRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
