import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import PropTypes from "prop-types";

function Header(props) {
  const { logout } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <span style={{ color: "#e62632", fontSize: "x-large" }}>iF</span>ound
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown ml-auto">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User Management
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <React.Fragment>
                <a className="dropdown-item" href="/login">
                  Login
                </a>
                <a className="dropdown-item" href="/register">
                  Register
                </a>
              </React.Fragment>

              <React.Fragment>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={logout}>
                  Logout
                </a>
              </React.Fragment>
            </div>
          </li>
          <li className="nav-item dropdown ml-auto">
            <a className="nav-link" href="/">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Header);
