import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes["modal-content"]}>
      <h1 className={classes.title}>Welcome to Pinterest</h1>

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
        <button className={`${classes["login-button"]} ${classes.button}`}>
          Log in
        </button>
      </form>

      <a className={classes["forgot-password"]}>Forgot your password?</a>

      <div className={classes["or-divider"]}>OR</div>

      <button className={`${classes["social-button"]} ${classes.button}`}>
        <div className={classes["social-icon"]}>
          {/* to access an image that is stored in the public folder, you don't need to use the import statement like you would for assets in the src directory. 
          you can reference the image directly using a relative path starting from the public folder. 
          If you were to import the image using the relative path (like import googleLogo from "../../../public/images/google-new.svg";), React won't treat it correctly, and it might not work because the public folder is outside the build system's scope, which expects assets inside src*/}
          <img src="/images/google-new.svg" alt="Google Logo" />
        </div>
        Continue with Google
      </button>

      <button className={`${classes["social-button"]} ${classes.button}`}>
        <div className={classes["social-icon"]}>
          <img src="/images/facebook-2020-2-1.svg" alt="Facebook Logo" />
        </div>
        Continue with Facebook
      </button>

      <p className={classes["signup-text"]}>
        Not on Pinterest yet? <a className={classes["signup-link"]}>Sign up</a>
      </p>

      <a className={classes["terms-text"]}>
        By continuing, you agree to Pinterest's Terms of Service and acknowledge
        you've read our Privacy Policy
      </a>

      <button className={classes["language-selector"]}>
        English (US) <FaChevronDown size={16} style={{ marginLeft: "4px" }} />
      </button>
    </div>
  );
};

export default Login;
