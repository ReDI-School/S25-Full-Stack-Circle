import React from "react";
import { Mail, Lock } from "lucide-react";
import googleLogo from "/images/google-new.svg";

import {
  ModalContent,
  Title,
  Form,
  InputGroup,
  IconWrapper,
  InputLabel,
  Input,
  LoginButton2,
  Subtitle,
  SocialButton,
  SocialIcon,
  OrDivider,
  SignupText,
  SignupLink,
  TermsText,
} from "./ReusableModalStyles.jsx";
const SignupForm = () => {
  return (
    <ModalContent>
      <Title>Welcome to Pinterest</Title>
      <Subtitle>Find new ideas to try</Subtitle>
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

        <InputGroup>
          <IconWrapper></IconWrapper>
          <InputLabel>Date of birth</InputLabel>
          <Input type="date" placeholder="dd/mm/yyyy" />
        </InputGroup>
      </Form>
      <LoginButton2>Continue</LoginButton2>
      <OrDivider>OR</OrDivider>

      <SocialButton>
        <SocialIcon>
          <img src={googleLogo} alt="Google Logo" width={20} height={20} />
        </SocialIcon>
        Continue with Google
      </SocialButton>

      <TermsText>
        By continuing, you agree to Pinterest's Terms of Service and acknowledge
        you've read our Privacy Policy
      </TermsText>

      <SignupText>
        Already a member? <SignupLink>Log in</SignupLink>
      </SignupText>
    </ModalContent>
  );
};

export default SignupForm;
