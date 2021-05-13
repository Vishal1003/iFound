import React from "react";
import Welcome from "./components/FormComponent/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/FormComponent/Login";
import Register from "./components/FormComponent/Register";
import Header from "./components/HeaderComponent/Header";

export default function App() {
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login onSubmit={handleSubmit} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
