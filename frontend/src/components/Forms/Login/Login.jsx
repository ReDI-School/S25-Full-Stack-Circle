import React from 'react';
import { CiMail, CiLock } from 'react-icons/ci';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Login.module.css';

const Login = () => (
  <div className={styles.modalContent}>
    <h1 className={styles.title}>Welcome to Pinterest</h1>

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
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />
      </div>
      <button className={`${styles.loginButton} ${styles.button}`}>
        Log in
      </button>
    </form>

    <a className={styles.forgotPassword}>Forgot your password?</a>

    <div className={styles.orDivider}>OR</div>

    <button className={`${styles.socialButton} ${styles.button}`}>
      <div className={styles.socialIcon}>
        <img src="/images/google-new.svg" alt="Google Logo" />
      </div>
      Continue with Google
    </button>

    <button className={`${styles.socialButton} ${styles.button}`}>
      <div className={styles.socialIcon}>
        <img src="/images/facebook-2020-2-1.svg" alt="Facebook Logo" />
      </div>
      Continue with Facebook
    </button>

    <p className={styles.signupText}>
      Not on Pinterest yet? <a className={styles.signupLink}>Sign up</a>
    </p>

    <a className={styles.termsText}>
      By continuing, you agree to Pinterest's Terms of Service and acknowledge
      you've read our Privacy Policy
    </a>

    <button className={styles.languageSelector}>
      English (US) <FaChevronDown size={16} style={{ marginLeft: '4px' }} />
    </button>
  </div>
);

export default Login;
