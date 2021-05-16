import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { useHistory } from "react-router";

function Login(props) {
  const { login, error } = props;
  const [loginState, setLoginState] = useState({ msg: null });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginState, history);
  };

  useEffect(() => {
    if (error.id === 1) setLoginState({ ...loginState, msg: error.msg });
  }, [error]);

  return (
    <div className="container">
      <h2 style={styles.title}>
        User Log<span style={{ color: "#e62632" }}>In</span>
      </h2>
      <form style={styles.formStyle} onSubmit={handleSubmit}>
        <label style={styles.labelStyle}>Email:</label>
        <input
          required
          type="email"
          style={styles.inputStyle}
          onChange={(event) => {
            const email = event.target.value;
            setLoginState({ ...loginState, ...{ email } });
          }}
        />
        <label style={styles.labelStyle}>Password:</label>
        <input
          required
          type="password"
          style={styles.inputStyle}
          onChange={(event) => {
            const password = event.target.value;
            setLoginState({ ...loginState, ...{ password } });
          }}
        />
        {loginState.msg ? (
          <div
            style={{ color: "brown" }}
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {loginState.msg}
          </div>
        ) : null}
        <div style={{ marginTop: 10 }}>
          <button
            className="btn btn-primary"
            style={styles.button}
            type="submit"
          >
            Login
          </button>
          {"  "}
          <div style={{ marginTop: 10, fontSize: 15 }}>
            Don't have an account ? {"  "}
            <a href="/register" style={{ color: "blue" }}>
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login })(Login);

const styles = {
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    margin: 50,
    fontWeight: "bold",
  },

  button: {
    display: "block",
    backgroundColor: "#9370DB",
    padding: 10,
    width: 150,
    borderRadius: 10,
  },

  formStyle: {
    margin: "auto",
    padding: "25px",
    border: "1px solid #c9c9c9",
    borderRadius: "5px",
    background: "#f5f5f5",
    display: "block",
    textAlign: "start",
  },

  labelStyle: {
    margin: "10px 0 5px 0",
    fontSize: "15px",
  },
  inputStyle: {
    margin: "5px 0 10px 0",
    padding: "5px",
    border: "1px solid #bfbfbf",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
  },
};
