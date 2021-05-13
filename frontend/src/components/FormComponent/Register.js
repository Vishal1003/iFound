import React, { useRef } from "react";

const { innerHeight, innerWidth } = window;

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
      <div style={styles.card}>
        <h2 style={styles.title}>
          User <span style={{ color: "#e62632" }}>Register</span>
        </h2>
        <form style={styles.formStyle} onSubmit={handleSubmit}>
          <div className="row">
            <Field
              className="col"
              required={true}
              ref={nameRef}
              label="Name:"
              type="text"
            />
            <Field
              className="col"
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
              className="col"
            />
            <Field
              required={true}
              ref={confirmpasswordRef}
              label="Confirm Password:"
              type="password"
              className="col"
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
              Don't have an account ? {"  "}
              <a href="/register" style={{ color: "blue" }}>
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  card: {
    height: innerHeight / 1.5,
    width: innerWidth / 1.5,
    border: "2px solid lightgray",
    margin: "auto",
    marginTop: innerHeight / 8,
    borderRadius: 20,
    textAlign: "center",
  },

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
    padding: "10px",
    border: "1px solid #c9c9c9",
    borderRadius: "5px",
    background: "#f5f5f5",
    width: innerWidth / 2,
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
