import React, { useState, useEffect, useContext } from "react";
import { CiMail, CiLock } from "react-icons/ci";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../../../utils/auth";
import { UserContext } from "../../../contexts/UserContext";

const SignUp = ({ closeModal }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && isTokenValid(token)) {
      navigate("/userPins");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dateOfBirth: ""
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password, dateOfBirth } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (!dateOfBirth) {
      setError("Please provide your date of birth.");
      return false;
    }

    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    const userAge = hasBirthdayPassed ? age : age - 1;

    if (userAge < 12) {
      setError("You must be at least 12 years old to register.");
      return false;
    }

    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      localStorage.setItem("authToken", result.token);
      const meRes = await fetch("http://localhost:4000/api/user/me", {
        headers: {
          Authorization: `Bearer ${result.token}`
        }
      });

      const meData = await meRes.json();
      setUser(meData.user);

      if (!response.ok) {
        setError(result.message);
      } else {
        setSuccessMessage("Signup successful! Redirecting to login...");
        closeModal(); // ✅ Close login modal
        navigate("/userpins");
      }
    } catch (error) {
      setError("Error connecting to server. Please try again.", error);
    }
  };

  return (
    <div className={styles.modalContent}>
      <h1 className={styles.title}>Welcome to Pinterest</h1>
      <p className={styles.subtitle}>Find new ideas to try</p>
      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <div className={styles.iconWrapper}>
            <CiMail size={20} />
          </div>
          <label className={styles.inputLabel}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.iconWrapper}></div>
          <label className={styles.inputLabel}>Date of birth</label>
          <input
            className={styles.input}
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={`${styles.loginButton} ${styles.button}`}
        >
          Continue
        </button>
      </form>

      <div className={styles.orDivider}>OR</div>

      <button className={`${styles.socialButton} ${styles.button}`}>
        <div className={styles.socialIcon}>
          <img
            src="/images/google-new.svg"
            alt="Google Logo"
            width={20}
            height={20}
          />
        </div>
        Continue with Google
      </button>

      <a className={styles.termsText}>
        By continuing, you agree to Pinterest's Terms of Service and acknowledge
        you've read our Privacy Policy
      </a>

      <button className={styles.languageSelector}>
        Already a member? <a className={styles.signupLink}>Log in</a>
      </button>
    </div>
  );
};

export default SignUp;
