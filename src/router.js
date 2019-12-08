// @packages
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

// @own
import Expenses from 'views/Expenses';
import Manager from 'views/Manager';
import Home from 'views/Home';

const history = createBrowserHistory();

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/manager">
          <Manager />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
