import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import indexRoutes from "./constants/indexRoutes";

const App = () => (
  <Router>
    <Suspense fallback="loading...">
      {indexRoutes.map(({ path, component }, key) => (
        <Route path={path} component={component} exact={true} key={key} />
        ))
      }
    </Suspense>
  </Router>
);

export default App
