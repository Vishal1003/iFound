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
import ProtectedRoute from "./components/ProtectedComponent/ProtectedRoute";

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
            {/* <ProtectedRoute exact path="/dashboard" component={DashBoard} /> */}
            <Route exact path="/dashboard">
              <DashBoard />
            </Route>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
