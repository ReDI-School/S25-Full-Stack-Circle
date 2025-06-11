import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";
import { PiCaretDownLight } from "react-icons/pi";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { UserContext } from "../../contexts/UserContext"

const DropdownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const toggleOpen = () => setIsOpen(prev => !prev);

  const { logout } = useContext(UserContext);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles["dropdown-profile-wrapper"]}
      onClick={toggleOpen}
    >
      <PiCaretDownLight className={styles["dropdown-profile-button"]} />
      {isOpen && (
        <ul className={styles["dropdown-profile-list"]}>
          <li
            className={styles["dropdown-profile-info"]}
            onClick={() => navigate("/userspins")}
          >
            <ProfileInfo />
          </li>
          <li onClick={() => navigate("/createPin")}>Create Pins</li>
          <li onClick={logout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

/* ************************************************************************************* */
const DropdownFilter = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ id: "your", label: "Your Pins" });
  const dropdownRef = useRef(null);

  const options = [
    { id: "your", label: "Your Pins" },
    { id: "all", label: "All Pins" }
  ];

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = option => {
    setSelected(option);
    onSelect(option.id);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={styles["dropdown-filterPin-wrapper"]}>
      <div
        onClick={toggleDropdown}
        className={styles["dropdown-filterPin-button"]}
      >
        {selected.label}
        <PiCaretDownLight />
      </div>

      {isOpen && (
        <ul className={styles["dropdown-filterPin-list"]}>
          {options.map(option => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { DropdownFilter, DropdownProfile };
