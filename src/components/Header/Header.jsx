import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./Header.module.css";
import logo from "/images/pinterest-seeklogo.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <IconButton>
          <img src={logo} alt="Logo" width={100} height={100} />
        </IconButton>
      </div>

      <div className={styles.exploreButton}>
        <Link to="/explore">Explore</Link>
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchBarWrapper}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form action="">
            <input
              type="text"
              placeholder="Search for easy dinners, fashion, etc."
            />
            <button type="submit"></button>
          </form>
        </div>
      </div>

      <div className={styles.aboutButton}>
        <Link to="/">About</Link>
      </div>

      <div className={styles.businessButton}>
        <Link to="/">Business</Link>
      </div>

      <div className={styles.pressButton}>
        <Link to="/">Press</Link>
      </div>

      <div className={styles.loginButton}>
        <Link to="/login">Log in</Link>
      </div>

      <div className={styles.signupButton}>
        <Link to="/signup">Sign up</Link>
      </div>

      <div className={styles.iconWrapper}>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
