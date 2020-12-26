import React from "react";

import { Route, HashRouter, Switch } from "react-router-dom";
import V1 from "./pages/V1";
import V2 from "./pages/V2";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={V2} />
        </Switch>
        <Switch>
          <Route path="/old" component={V1} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
