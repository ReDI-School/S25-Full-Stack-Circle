import React from "react";
import logo from "/images/pinterest-seeklogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { IconButton } from "@mui/material";
import {
  Wrapper,
  LogoWrapper,
  ExploreButton,
  LoginButton,
  SignupButton,
  SearchWrapper,
  SearchBarWrapper,
  IconWrapper,
} from "./HeaderStyles";
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
        <a href="/">Explore</a>
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
