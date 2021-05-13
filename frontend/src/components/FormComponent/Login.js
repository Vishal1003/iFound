import React from 'react'

const {innerHeight, innerWidth} = window

export default function Login() {
    return (
        <div className="container">
            
        </div>
    )
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
      color: "#FFEFD5",
      backgroundColor: "#9370DB",
    },
  
    buttonGrp: {
      alignItems: "center",
      marginTop: 100,
    },
  };
  
