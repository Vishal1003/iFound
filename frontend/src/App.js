import React, { useEffect } from "react";
import Welcome from "./components/FormComponent/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/FormComponent/Login";
import Register from "./components/FormComponent/Register";
import Header from "./components/HeaderComponent/Header";
import DashBoard from "./components/Profile/DashBoard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "./redux/actions/authActions";

function App(props) {
  const { isAuthenticated, loadUser } = props;

  useEffect(() => {
    loadUser();
  }, []);

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
          {isAuthenticated ? (
            <Route exact path="/dashboard">
              <DashBoard />
            </Route>
          ) : null}

          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser })(App);
