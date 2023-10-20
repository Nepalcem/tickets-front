import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  FormField,
  ErrorMessageStyled,
  SignupButton,
} from "./SignupForm.styled";


const SignupForm = ({ isLogin, onSubmit }) => {
  const validationSchema = isLogin
    ? Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
      })
    : Yup.object({
        username: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
      });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values, actions);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {!isLogin && (
        <FormField
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <ErrorMessageStyled>{formik.errors.username}</ErrorMessageStyled>
          ) : null}
        </FormField>
      )}
      <FormField
        // isvalid={
        //   formik.touched.email &&
        //   !formik.errors.email &&
        //   formik.errors.email !== ""
        // }
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
        ) : null}
      </FormField>
      <FormField>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
        ) : null}
      </FormField>
      {isLogin && (
        <p className="forgot-password">
          <span>Forgot password?</span>
        </p>
      )}
      <SignupButton type="submit">{isLogin ? "Login" : "Signup"}</SignupButton>
      {isLogin && (
        <p className="form-center-align">
          <span className="blue-regular-text"> Don’t have account?</span>
          <span className="forgot-password"> Sign Up</span>
        </p>
      )}
    </StyledForm>
  );
};

export default SignupForm;
