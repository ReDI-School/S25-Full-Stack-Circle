import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Forms/Login/Login";
import SignUp from "../Forms/SignUp/SignUp";
import Modal from "../Modal/Modal";
import { UserContext } from "../../contexts/UserContext";
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
  IconWrapper,
  SuggestionsContainer,
  SuggestionItem
} from "./HeaderStyles";

const Header = () => {
  const { user, loading } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchTimeoutRef = useRef(null);

  const navigate = useNavigate();

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

  const fetchSuggestions = async query => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    return new Promise(resolve => {
      setTimeout(() => {
        const dummySuggestions = [
          `${query} ideas`,
          `${query} recipes`,
          `${query} fashion trends`,
          `how to ${query}`,
          `best ${query} 2025`
        ].filter(s => s.toLowerCase().includes(query.toLowerCase()));
        resolve(dummySuggestions);
      }, 300);
    });
  };

  const handleSearchInputChange = async event => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set a new timeout to debounce the suggestion fetch
    searchTimeoutRef.current = setTimeout(async () => {
      if (value.trim().length > 1) {
        const fetched = await fetchSuggestions(value.trim());
        setSuggestions(fetched);
      } else {
        setSuggestions([]);
      }
    }, 400);
  };

  const handleSearch = (query = searchTerm) => {
    if (query.trim()) {
      console.log("Performing search for:", query.trim());
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchTerm(query.trim());
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSearch();
  };

  const handleSuggestionClick = suggestion => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      // Check if the click is outside the SearchWrapper (or a more specific parent)
      if (
        event.target.closest(`.${SearchWrapper.styledComponentId}`) === null &&
        event.target.closest(`.${SuggestionsContainer.styledComponentId}`) ===
          null
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Search for easy dinners, fashion, etc."
              value={searchTerm}
              onChange={handleSearchInputChange}
              onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
            />
            <button type="submit"></button>
          </form>
        </SearchBarWrapper>

        {showSuggestions && suggestions.length > 0 && (
          <SuggestionsContainer>
            {suggestions.map((s, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSuggestionClick(s)}
              >
                {s}
              </SuggestionItem>
            ))}
          </SuggestionsContainer>
        )}
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
