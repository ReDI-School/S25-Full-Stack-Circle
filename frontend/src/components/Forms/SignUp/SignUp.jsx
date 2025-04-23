import React from "react";
import styles from "./SignUp.module.css";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const SignUp = () => (
  <div className={styles.modalContent}>
    <h1 className={styles.title}>Welcome to Pinterest</h1>
    <p className={styles.subtitle}>Find new ideas to try</p>
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <div className={styles.iconWrapper}>
          <CiMail size={20} />
        </div>
        <label className={styles.inputLabel}>Email</label>
        <input className={styles.input} type="email" placeholder="Email" />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.iconWrapper}>
          <CiLock size={20} />
        </div>
        <label className={styles.inputLabel}>Password</label>
        <input className={styles.input} type="password" placeholder="Password" />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.iconWrapper}></div>
        <label className={styles.inputLabel}>Date of birth</label>
        <input className={styles.input} type="date" placeholder="dd/mm/yyyy" />
      </div>
    </form>
    <button className={`${styles.loginButton} ${styles.button}`}>Continue</button>
    <div className={styles.orDivider}>OR</div>

    <button className={`${styles.socialButton} ${styles.button}`}>
      <div className={styles.socialIcon}>
        <img src="/images/google-new.svg" alt="Google Logo" width={20} height={20} />
      </div>
      Continue with Google
    </button>

    <a className={styles.termsText}>
      By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our
      Privacy Policy
    </a>

    <button className={styles.languageSelector}>
      Already a member? <a className={styles.signupLink}>Log in</a>
    </button>
  </div>
);

export default SignUp;
