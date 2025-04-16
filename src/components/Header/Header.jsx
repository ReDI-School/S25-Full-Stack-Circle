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
  IconWrapper
} from "./HeaderStyles";

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <IconButton>
        <img src="/images/pinterest-seeklogo.svg" alt="Logo" width={100} height={100} />
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
          <input type="text" placeholder="Search for easy dinners, fashion, etc." />
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
    <LoginButton>
      <Link to="/login">Log in</Link>
    </LoginButton>
    <SignupButton>
      <Link to="/signup">Sign up</Link>
    </SignupButton>
    <IconWrapper>
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
    </IconWrapper>
  </Wrapper>
);

export default Header;
