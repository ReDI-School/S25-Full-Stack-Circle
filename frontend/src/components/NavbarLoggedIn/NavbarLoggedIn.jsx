import React from "react";
import styles from "./NavbarLoggedIn.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

import { DropdownProfile, DropdownFilter } from "../Dropdown/Dropdown";

const NavbarLoggedIn = () => {
  return (
    <div>
      <div className={styles["searchbar-profile"]}>
        <div className={styles["searchbar-wrapper"]}>
          <SearchIcon />
          <Input
            className={styles["searchbar-input"]}
            type="text"
            placeholder="Search Your Pins"
            disableUnderline
          />
          <DropdownFilter />
        </div>
        <div className={styles["profile-logo"]}>N</div>
        <DropdownProfile />
      </div>
    </div>
  );
};

export default NavbarLoggedIn;
