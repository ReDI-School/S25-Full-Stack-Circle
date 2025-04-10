import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: hsl(0, 0%, 100%);
  color: black;
`;
export const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  height: 48px;
  min-width: 60px;
  padding: 16px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  margin: 0 10px 0 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  text-size-adjust: 100%;
`;

export const ExploreButton = styled(Button)`
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 100%, 100%);
  & > a {
    color: hsl(0, 0%, 7%);
  }
  &:hover {
    background-color: rgb(241, 241, 241);
  }
`;

export const PressButton = styled(Button)`
  & > a {
    color: hsl(0, 0%, 7%);
  }
`;

export const BusinessButton = styled(Button)`
  & > a {
    color: hsl(0, 0%, 7%);
  }
`;

export const AboutButton = styled(Button)`
  & > a {
    color: hsl(0, 0%, 7%);
  }
`;

export const LoginButton = styled(Button)`
  background-color: rgb(241, 241, 241);
  color: hsl(330, 2%, 19%);
  font-weight: 700;

  &:hover {
    background-color: hsl(0, 0%, 91%);
  }
`;

export const SignupButton = styled(Button)`
  background-color: hsl(351, 100%, 45%);
  color: white;

  &:hover {
    background-color: hsl(352, 86%, 40%);
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
`;

export const SearchBarWrapper = styled.div`
  background-color: rgb(241, 241, 241);
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

  &:hover {
    background-color: hsl(0, 0%, 91%);
  }
`;

export const IconWrapper = styled.div``;
