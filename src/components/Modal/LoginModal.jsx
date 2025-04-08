import React from "react";
import { X, Mail, Lock, ChevronDown } from "lucide-react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalContent,
  Title,
  Form,
  Input,
  InputGroup,
  IconWrapper,
  InputLabel,
  LoginButton,
  ForgotPassword,
  OrDivider,
  SocialButton,
  SocialIcon,
  SignupText,
  SignupLink,
  TermsText,
  LanguageSelector,
  Logo,
} from "./LoginModalStyles";
import googleLogo from "/images/google-new.svg";
import facebookLogo from "/images/facebook-2020-2-1.svg";
import pinterestLogo from "/images/pinterest-3.svg";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Logo>
            <img src={pinterestLogo} alt="Pinterest Logo" />
          </Logo>

          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <Title>Welcome to Pinterest</Title>

          <Form>
            <InputGroup>
              <IconWrapper>
                <Mail size={20} />
              </IconWrapper>
              <InputLabel>Email</InputLabel>
              <Input type="email" placeholder="Email" />
            </InputGroup>

            <InputGroup>
              <IconWrapper>
                <Lock size={20} />
              </IconWrapper>
              <InputLabel>Password</InputLabel>
              <Input type="password" placeholder="Password" />
            </InputGroup>

            <LoginButton>Log in</LoginButton>
          </Form>

          <ForgotPassword>Forgot your password?</ForgotPassword>

          <OrDivider>OR</OrDivider>

          <SocialButton>
            <SocialIcon>
              <img src={googleLogo} alt="Google Logo" width={20} height={20} />
            </SocialIcon>
            Continue with Google
          </SocialButton>

          <SocialButton>
            <SocialIcon>
              <img
                src={facebookLogo}
                alt="Facebook Logo"
                width={40}
                height={40}
              />
            </SocialIcon>
            Continue with Facebook
          </SocialButton>

          <SignupText>
            Not on Pinterest yet? <SignupLink>Sign up</SignupLink>
          </SignupText>

          <TermsText>
            By continuing, you agree to Pinterest's Terms of Service and
            acknowledge you've read our Privacy Policy
          </TermsText>

          <LanguageSelector>
            English (US) <ChevronDown size={16} style={{ marginLeft: "4px" }} />
          </LanguageSelector>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default LoginModal;
