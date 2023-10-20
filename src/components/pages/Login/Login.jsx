import React from "react";
import { useDispatch } from "react-redux";
import { SignUpMain, SignupImage, FormBlock } from "../Signup/Signup.styled";
import SignUpBackground from "../../images/signup-image.jpg";
import SignupForm from "../../SignupForm/SignupForm";
import authOperations from "../../redux/auth/authOperations";
import { toast } from "react-toastify";

export default function LogIn() {
  const dispatch = useDispatch();

  const handleLoginSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(authOperations.logIn({ email, password }));
    toast.success("Form sent. Please await for a few seconds!", {
      autoClose: 20000,
    });
    actions.resetForm();
  };

  return (
    <SignUpMain>
      <div className="main-container">
        <SignupImage src={SignUpBackground} alt="hero-background" />
        <FormBlock>
          <h2 className="login-title">Login</h2>
          <SignupForm isLogin={true} onSubmit={handleLoginSubmit} />
        </FormBlock>
      </div>
    </SignUpMain>
  );
}
