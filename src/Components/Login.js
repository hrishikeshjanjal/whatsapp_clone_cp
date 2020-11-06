import { Button } from "@material-ui/core";
import React from "react";
import "../assets/Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../Reducer";
import { useStateValue } from "../StateProvider";
const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => error.message);
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.dribbble.com/users/420317/screenshots/6195864/friend.jpg"
          alt=""
        />
        <h1>Welcome By Rishi</h1>
        <div className="login_text">Sign in to Whatsapp Chat Room </div>
        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
