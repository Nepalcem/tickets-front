import React from "react";
import { SignUpMain, SignupImage, FormBlock } from "./Signup.styled";
import SignUpBackground from "../../images/signup-image.jpg";
import SignupForm from "../../SignupForm/SignupForm";

export default function Signup() {
  return (
    <SignUpMain>
      <div className="main-container">
        <SignupImage src={SignUpBackground} alt="hero-background" />
        <FormBlock>
          <h2 className="login-title">Register</h2>
          <SignupForm />
        </FormBlock>
      </div>
    </SignUpMain>
  );
}
