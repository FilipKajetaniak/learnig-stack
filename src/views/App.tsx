import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Home/Home";
import { Editor } from "./Editor/Editor";

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/app" component={Editor} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
