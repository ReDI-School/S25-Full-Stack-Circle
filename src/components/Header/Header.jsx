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
import ReusableModal from "../Modal/ReusableModal";
import useModal from "../Modal/useModal";
import LoginForm from "../Modal/LoginForm";
import SignupForm from "../Modal/SignupForm";

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

      <ReusableModal isOpen={isOpen} onClose={closeModal}>
        {modalType === "login" && <LoginForm />}
        {modalType === "signup" && <SignupForm />}
      </ReusableModal>
    </Wrapper>
  );
};

export default Header;
