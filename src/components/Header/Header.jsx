import React, {useState} from "react";
import logo from "/images/pinterest-seeklogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "../Modal";


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

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
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
      <LoginButton  onClick={handleOpenModal}>
       Log in
      </LoginButton>
      <SignupButton onClick={handleOpenModal}>
         Sign up
      </SignupButton>
      <IconWrapper>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
    {showModal && <Modal onClose={handleCloseModal} />}
    </>

  );
};

export default Header;
