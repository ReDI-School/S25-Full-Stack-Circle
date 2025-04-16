// src/components/Login.jsx
import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginBox}>
      <h2>Welcome to Circle</h2>
      <p>Find new ideas to try</p>
      <form className={styles.form}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Create a password" required />
        <input type="date" placeholder="Birthdate" required />
        <button type="submit" className={styles.submitButton}>
          Continue
        </button>
      </form>

      <div className={styles.orSection}>OR</div>

      <button className={styles.googleLogin}>Continue with Google</button>

      <p className={styles.loginNote}>
        Already a member? <a href="#">Log in</a>
      </p>
    </div>
  );
};

export default Login;
