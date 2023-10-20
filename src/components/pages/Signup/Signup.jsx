import React from "react";
import { useDispatch } from "react-redux";
import { SignUpMain, SignupImage, FormBlock } from "./Signup.styled";
import SignUpBackground from "../../images/signup-image.jpg";
import SignupForm from "../../SignupForm/SignupForm";
import authOperations from "../../redux/auth/authOperations";
import { toast } from "react-toastify";

export default function Signup() {
  const dispatch = useDispatch();

  const handleSignupSubmit = (values, actions) => {
    const { username, email, password } = values;
    dispatch(authOperations.register({ username, email, password }));
    toast.success("Form sent. Please await for a few seconds!");
    actions.resetForm();
  };

  return (
    <SignUpMain>
      <div className="main-container">
        <SignupImage src={SignUpBackground} alt="hero-background" />
        <FormBlock>
          <h2 className="login-title">Register</h2>
          <SignupForm isLogin={false} onSubmit={handleSignupSubmit} />
        </FormBlock>
      </div>
    </SignUpMain>
  );
}
