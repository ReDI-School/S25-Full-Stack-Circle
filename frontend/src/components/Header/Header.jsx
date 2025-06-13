import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Forms/Login/Login";
import SignUp from "../Forms/SignUp/SignUp";
import Modal from "../Modal/Modal";
import {UserContext} from "../../contexts/UserContext"
import { DropdownProfile, DropdownFilter } from "../Dropdown/Dropdown";
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

      <SearchWrapper>
        <SearchBarWrapper>
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

      {!loading && (
        user ? (
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
        )
      )}

      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalType === "login" && <Login closeModal={closeModal} />}
        {modalType === "signup" && <SignUp closeModal={closeModal} />}
      </Modal>
    </Wrapper>
  );
};

export default Header;
