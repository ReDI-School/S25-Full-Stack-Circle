import styled from 'styled-components';

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
  border-radius: 24px;
  cursor: pointer;
  white-space: nowrap;
`;

export const ExploreButton = styled(Button)`
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 7%);
    font-weight: 700;
  }
`;

export const PressButton = styled(Button)`
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 7%);
    font-weight: 700;
  }
`;

export const BusinessButton = styled(Button)`
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 7%);
    font-weight: 700;
  }
`;

export const AboutButton = styled(Button)`
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 7%);
    font-weight: 700;
  }
`;
export const LoginButton = styled(Button)`
  background-color: rgb(241, 241, 241);
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    color: hsl(330, 2%, 19%);
    font-weight: 700;
  }

  &:hover {
    background-color: hsl(0, 0%, 91%);
  }
`;

export const SignupButton = styled(Button)`
  background-color: hsl(351, 100%, 45%);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  &:hover {
    background-color: hsl(352, 86%, 40%);
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
`;

export const SearchBarWrapper = styled.div`
  background-color: #efefef;
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
