import React from "react";
import googleLogo from "/images/google-new.svg";
import classes from "./SignUp.module.css";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
const SignUp = () => {
  return (
    <div className={classes["modal-content"]}>
      <h1 className={classes.title}>Welcome to Pinterest</h1>
      <p className={classes.subtitle}>Find new ideas to try</p>
      <form className={classes.form}>
        <div className={classes["input-group"]}>
          <div className={classes["icon-wrapper"]}>
            <CiMail size={20} />
          </div>
          <label className={classes["input-label"]}>Email</label>
          <input className={classes.input} type="email" placeholder="Email" />
        </div>

        <div className={classes["input-group"]}>
          <div className={classes["icon-wrapper"]}>
            <CiLock size={20} />
          </div>
          <label className={classes["input-label"]}>Password</label>
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className={classes["input-group"]}>
          <div className={classes["icon-wrapper"]}></div>
          <label className={classes["input-label"]}>Date of birth</label>
          <input
            className={classes.input}
            type="date"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </form>
      <button className={`${classes["login-button"]} ${classes.button}`}>
        Continue
      </button>
      <div className={classes["or-divider"]}>OR</div>

      <button className={`${classes["social-button"]} ${classes.button}`}>
        <div className={classes["social-icon"]}>
          <img src={googleLogo} alt="Google Logo" width={20} height={20} />
        </div>
        Continue with Google
      </button>

      <a className={classes["terms-text"]}>
        By continuing, you agree to Pinterest's Terms of Service and acknowledge
        you've read our Privacy Policy
      </a>

      <button className={classes["language-selector"]}>
        Already a member? <a className={classes["signup-link"]}>Log in</a>
      </button>
    </div>
  );
};

export default SignUp;
