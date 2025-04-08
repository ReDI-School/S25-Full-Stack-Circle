import styled from "styled-components";

// overlay
// Modal overlay
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.308);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal container
export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  /* max-height: 90vh; */
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

// Modal header
export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Logo = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`;

// Modal content
export const ModalContent = styled.div`
  padding: 0 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 16px 0;
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* This centers the children */
  gap: 16px;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 80%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 65%;
  transform: translateY(-50%);
  color: #767676;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px 14px 44px;
  border: 2px solid #cdcdcd;
  border-radius: 16px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0074e8;
  }
  &::placeholder {
    color: #adadad;
  }
`;

export const LoginButton = styled.button`
  width: 80%;
  background-color: #e60023;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background-color: #d50c22;
  }
`;

export const ForgotPassword = styled.a`
  text-align: center;
  color: #767676;
  font-size: 14px;
  text-decoration: none;
  margin-top: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #767676;
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e3e3e3;
  }
  &:before {
    margin-right: 16px;
  }
  &:after {
    margin-left: 16px;
  }
`;

export const SocialButton = styled.button`
  width: 80%;
  padding: 14px;
  border-radius: 24px;
  border: 1px solid #cdcdcd;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const SocialIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupText = styled.p`
  text-align: center;
  margin-top: 24px;
  color: #767676;
  font-size: 14px;
`;

export const SignupLink = styled.a`
  color: #111;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const TermsText = styled.p`
  width: 80%;
  text-align: center;
  margin-top: 24px;
  color: #767676;
  font-size: 12px;
  line-height: 1.5;
`;

export const LanguageSelector = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  color: #767676;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
