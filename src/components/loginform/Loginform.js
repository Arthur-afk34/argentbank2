import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailed, loginSuccess } from "../../redux/Authactions.js";

const ValidEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

const ValidPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
  return regex.test(password);
};

function Loginform() {
  /* Allows you to retrieve the data entered by the user in the form */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  /* Indicates an error message if data is invalid */
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Asynchronous form function */
  const handleSubmit = async (event) => {
    event.preventDefault();
    /* Handle error message */
    if (!ValidEmail(email)) {
      setErrorMessage("Invalid email adress");
      return;
    }
    if (!ValidPassword(password)) {
      setErrorMessage("Invalid password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json(); // Extract data from response
        const token = data.body.token; // Extract token from response data object
        dispatch(loginSuccess(token)); // Dispatch loginSuccess action with token as payload 
        sessionStorage.setItem("token", token); // Store token in session storage for session persistence 
        if (rememberMe) {
          localStorage.setItem("token", token); // Store token in local storage if rememberMe is checked 
        }
        navigate("/Userpage");
      } else {
        const error = "Incorrect email/password";
        dispatch(loginFailed(error)); // Dispatch loginFailed action with error message as payload 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle"></i>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Loginform;
