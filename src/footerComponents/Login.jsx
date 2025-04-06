
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-box">
      <h2>Welcome to Circle</h2>
      <p>Find new ideas to try</p>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Create a password" required />
        <input type="date" placeholder="Birthdate" required />
        <button type="submit">Continue</button>
      </form>

      <div className="or-section">OR</div>

      <button className="google-login">Continue with Google</button>

      <p className="login-note">
        Already a member? <a href="#">Log in</a>
      </p>
    </div>
  );
};

export default Login;
