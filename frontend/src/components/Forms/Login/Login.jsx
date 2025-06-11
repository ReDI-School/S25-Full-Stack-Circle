import React, { useState, useEffect } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../../../utils/auth"
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext"

const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && isTokenValid(token)) {
      navigate("/dashboard"); 
    } 
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!email || !password) {
      return setError("Both email and password are required");
    }
  
    try {
      const res = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
    
      const data = await res.json();
    
      if (!res.ok) {
        return setError(data.message || "Login failed");
      }
    
      // Save token
      localStorage.setItem("authToken", data.token);
    
      // Fetch user info
      const meRes = await fetch("http://localhost:4000/api/user/me", {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      });
    
      const meData = await meRes.json();
      setUser(meData.user);
    
      sessionStorage.setItem("fromLogin", "true");
      navigate("/dashboard");
    } catch {
      setError("Server error, please try again");
    }
    
  };
  

  return(
  <div className={styles.modalContent}>
    <h1 className={styles.title}>Welcome to Pinterest</h1>

    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <div className={styles.iconWrapper}>
          <CiMail size={20} />
        </div>
        <label className={styles.inputLabel}>Email</label>
        <input className={styles.input} type="email" placeholder="Email" value={email}
  onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.iconWrapper}>
          <CiLock size={20} />
        </div>
        <label className={styles.inputLabel}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input}
        />
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
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
      <div className={styles.facebookIcon}>
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
      English (US) <FaChevronDown size={16} style={{ marginLeft: "4px" }} />
    </button>
  </div>
  );
};

export default Login;
