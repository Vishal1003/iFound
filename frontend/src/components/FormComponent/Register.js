import React, { useRef } from "react";

export default function Register({ onSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const confirmpasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      window.alert("Passwords do not match");
      return;
    }

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: confirmpasswordRef.current.value,
    };
    onSubmit(data);
  };

  const Field = React.forwardRef(
    ({ label, type, required, className }, ref) => {
      return (
        <div className={className}>
          <label style={styles.labelStyle}>{label}</label>
          <input
            required={required}
            ref={ref}
            type={type}
            style={styles.inputStyle}
          />
        </div>
      );
    }
  );

  return (
    <div className="container">
        <h2 style={styles.title}>
          User <span style={{ color: "#e62632" }}>Register</span>
        </h2>
        <form style={styles.formStyle} onSubmit={handleSubmit}>
          <div className="row">
            <Field
              className="col-md-6"
              required={true}
              ref={nameRef}
              label="Name:"
              type="text"
            />
            <Field
              className="col-md-6"
              required={true}
              ref={emailRef}
              label="Email:"
              type="email"
            />
          </div>
          <div className="row">
            <Field
              required={true}
              ref={passwordRef}
              label="Password:"
              type="password"
              className="col-md-6"
            />
            <Field
              required={true}
              ref={confirmpasswordRef}
              label="Confirm Password:"
              type="password"
              className="col-md-6"
            />
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
