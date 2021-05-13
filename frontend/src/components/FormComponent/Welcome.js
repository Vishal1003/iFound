import React from "react";
const { innerHeight, innerWidth } = window;

export default function Welcome() {
  return (
    <div className="container">
      <div style={styles.card}>
        <h2 style={styles.title}>
          Welcome <span style={{color: "#e62632"}}>User</span>
        </h2>
        <div style={styles.content}>
          <a href="/login" className="btn" style={styles.button}>
            LOGIN
          </a>
          <a href="/register" className="btn" style={styles.button}>
            REGISTER
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    height: innerHeight / 2,
    width: innerWidth / 1.5,
    border: "2px solid gray",
    margin: "auto",
    marginTop: innerHeight / 5,
    borderRadius: 20,
    boxShadow: "1px 1px 2px 2px gray",
    textAlign: "center",
  },

  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    fontWeight: "bold",
  },

  button: {
    display: "block",
    width: innerWidth / 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#9370DB",
  },

  content: {
    alignItems: "center",
    marginTop: 100,
  },
};
