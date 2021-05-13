import React, { useState } from "react";
import { connect } from "react-redux";
import { RegisterAuthAction } from "../../redux/actions/authActions";

function Register(props) {
  const { user, register } = props;
  const [userState, setUserstate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userState.password !== userState.password2) {
      window.alert("Passwords do not match");
      return;
    }
    register(userState);
  };

  return (
    <div className="container">
      <h2 style={styles.title}>
        User <span style={{ color: "#e62632" }}>Register</span>
      </h2>
      <form style={styles.formStyle} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label style={styles.labelStyle}>Name:</label>
            <input
              required
              type="text"
              style={styles.inputStyle}
              onChange={(event) => {
                const name = event.target.value;
                setUserstate({ ...userState, ...{ name } });
              }}
            />
          </div>

          <div className="col-md-6">
            <label style={styles.labelStyle}>Email:</label>
            <input
              required
              type="email"
              style={styles.inputStyle}
              onChange={(event) => {
                const email = event.target.value;
                setUserstate({ ...userState, ...{ email } });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label style={styles.labelStyle}>Password:</label>
            <input
              required
              type="password"
              style={styles.inputStyle}
              onChange={(event) => {
                const password = event.target.value;
                setUserstate({ ...userState, ...{ password } });
              }}
            />
          </div>

          <div className="col-md-6">
            <label style={styles.labelStyle}>Confirm Password:</label>
            <input
              required
              type="password"
              style={styles.inputStyle}
              onChange={(event) => {
                const password2 = event.target.value;
                setUserstate({ ...userState, ...{ password2 } });
              }}
            />
          </div>
        </div>

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
            Already have an account ? {"  "}
            <a href="/login" style={{ color: "blue" }}>
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState) => {
      dispatch(RegisterAuthAction(userState))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

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
