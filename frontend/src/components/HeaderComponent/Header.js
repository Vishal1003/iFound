import React from "react";

export default function Header() {
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
              <a className="dropdown-item" href="/login">
                Login
              </a>
              <a className="dropdown-item" href="/register">
                Register
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Logout
              </a>
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
