import React from "react";
import Welcome from "./components/FormComponent/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/FormComponent/Login";
import Register from "./components/FormComponent/Register";
import Header from "./components/HeaderComponent/Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
