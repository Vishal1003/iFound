import React, { useEffect } from "react";
import Welcome from "./components/FormComponent/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/FormComponent/Login";
import Register from "./components/FormComponent/Register";
import Header from "./components/HeaderComponent/Header";
import DashBoard from "./components/Profile/DashBoard";
import { Provider } from "react-redux";
import store from "./redux/store";

import { loadUser } from "./redux/actions/authActions";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
            <Route exact path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
