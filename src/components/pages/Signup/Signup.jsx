import React from 'react'
import { SignUpMain,SignupImage, FormBlock } from './Signup.styled';
import SignUpBackground from '../../images/signup-image.jpg';

export default function Signup() {
  return (
    <SignUpMain>
      <div className="main-container">
        <SignupImage src={SignUpBackground} alt="hero-background" />
        <FormBlock></FormBlock>
      </div>
    </SignUpMain>
  );
}
