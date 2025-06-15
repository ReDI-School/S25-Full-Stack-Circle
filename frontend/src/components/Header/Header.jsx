import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Forms/Login/Login";
import SignUp from "../Forms/SignUp/SignUp";
import Modal from "../Modal/Modal";
import SearchDropdown from "../Search/SearchDropdown";
import { DropdownProfile } from "../Dropdown/Dropdown";
import styles from "../NavbarLoggedIn/NavbarLoggedIn.module.css";

import {
  Wrapper,
  LogoWrapper,
  ExploreButton,
  SearchWrapper,
  SearchBarWrapper,
  AboutButton,
  BusinessButton,
  PressButton,
  LoginButton,
  SignupButton,
  IconWrapper
} from "./HeaderStyles";

const Header = () => {

  // State for the search input's value
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  // State to control if the search dropdown is visible
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchWrapperRef = useRef(null); // Ref to detect outside clicks
  // State for modal management
 

  const { user, loading } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for modal management
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (!loading && user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user, loading]);


  // Modal functions
  const openModal = type => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  // This function will be called when the form is submitted (user presses Enter)
  const onSearchSubmit = e => {
    e.preventDefault(); // Prevents the page from reloading
    if (input) {
      // Only navigate if there is a search term
      navigate(`/search?q=${input}`);
      setIsSearchFocused(false);
    }
  };
  // --- NEW: Hook to handle clicks outside of the search area ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchWrapperRef]);

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent"
            }
          }}
        >
          <img
            src="/images/pinterest-seeklogo.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </IconButton>
      </LogoWrapper>

      <ExploreButton>
        <Link to="/explore">Explore</Link>
      </ExploreButton>

      <SearchWrapper
        ref={searchWrapperRef}
        onFocus={() => setIsSearchFocused(true)}
      >
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search for easy dinners, fashion, etc."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit"></button>
          </form>
          {/* --- NEW: Conditionally render the dropdown --- */}
          {isSearchFocused && <SearchDropdown currentInput={input} />}
        </SearchBarWrapper>
      </SearchWrapper>

      <AboutButton>
        <Link to="/createPin">About</Link>
      </AboutButton>

      <BusinessButton>
        <Link to="/">Business</Link>
      </BusinessButton>

      <PressButton>
        <Link to="/">Press</Link>
      </PressButton>

      <PressButton>
        <Link to="/blog">Blog</Link>
      </PressButton>

      {!loading &&
        (isLoggedIn && user ? (
          <>
            <div className={styles["profile-logo"]}>
              {user.email?.[0]?.toUpperCase() ?? "?"}
            </div>
            <DropdownProfile />
          </>
        ) : (
          <>
            <LoginButton onClick={() => openModal("login")}>
              <Link to="#">Log in</Link>
            </LoginButton>
            <SignupButton onClick={() => openModal("signup")}>
              <Link to="#">Sign up</Link>
            </SignupButton>
            <IconWrapper>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </IconWrapper>
          </>
        ))}

      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalType === "login" && <Login closeModal={closeModal} />}
        {modalType === "signup" && <SignUp closeModal={closeModal} />}
      </Modal>
    </Wrapper>
  );
};

export default Header;
