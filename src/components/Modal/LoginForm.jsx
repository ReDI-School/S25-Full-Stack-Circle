import React from "react";
import { Mail, Lock, ChevronDown } from "lucide-react";
import googleLogo from "/images/google-new.svg";
import facebookLogo from "/images/facebook-2020-2-1.svg";

import {
  ModalContent,
  Title,
  Form,
  InputGroup,
  IconWrapper,
  InputLabel,
  Input,
  LoginButton2,
  ForgotPassword,
  OrDivider,
  SocialButton,
  SocialIcon,
  SignupText,
  SignupLink,
  TermsText,
  LanguageSelector,
} from "./ReusableModalStyles.jsx";

const LoginForm = () => {
  return (
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
        <LoginButton2>Log in</LoginButton2>
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
          <img src={facebookLogo} alt="Facebook Logo" width={40} height={40} />
        </SocialIcon>
        Continue with Facebook
      </SocialButton>

      <SignupText>
        Not on Pinterest yet? <SignupLink>Sign up</SignupLink>
      </SignupText>

      <TermsText>
        By continuing, you agree to Pinterest's Terms of Service and acknowledge
        you've read our Privacy Policy
      </TermsText>

      <LanguageSelector>
        English (US) <ChevronDown size={16} style={{ marginLeft: "4px" }} />
      </LanguageSelector>
    </ModalContent>
  );
};

export default LoginForm;
