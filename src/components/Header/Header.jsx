import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  IconWrapper,
} from "./HeaderStyles";
import logo from "/images/pinterest-seeklogo.svg";
import Modal from "../Modal/Modal";
import useModal from "../Modal/hooks/useModal";
import Login from "../Forms/Login/Login";
import SignUp from "../Forms/SignUp/SignUp";

const Header = () => {
  const { isOpen, modalType, openModal, closeModal } = useModal();

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <img src={logo} alt="Logo" width={100} height={100} />
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
        <Link to="/">About</Link>
      </AboutButton>
      <BusinessButton>
        <Link to="/">Business</Link>
      </BusinessButton>
      <PressButton>
        <Link to="/">Press</Link>
      </PressButton>

      <LoginButton onClick={() => openModal("login")}>Login</LoginButton>

      <SignupButton onClick={() => openModal("signup")}>Sign up</SignupButton>

      <IconWrapper>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalType === "login" && <Login />}
        {modalType === "signup" && <SignUp />}
      </Modal>
    </Wrapper>
  );
};

export default Header;
