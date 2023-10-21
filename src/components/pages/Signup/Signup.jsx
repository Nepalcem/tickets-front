import React from "react";
import { useDispatch } from "react-redux";
import { SignUpMain, SignupImage, FormBlock } from "./Signup.styled";
import SignUpBackground from "../../images/signup-image.jpg";
import SignupForm from "../../SignupForm/SignupForm";
import authOperations from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignupSubmit = async (values, actions) => {
    const { username, email, password } = values;
    const data = await dispatch(
      authOperations.register({ username, email, password })
    );
    console.log(data);
    actions.resetForm();
    if (data.type.includes("fulfilled")) {
      navigate("/login");
    }
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
