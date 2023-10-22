import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ForgotPasswordNav = styled(NavLink)`
  cursor: pointer;
  color: #b29f7e;
  font-size: 14px;
  line-height: 22px;
  align-self: flex-end;
  margin-top: -10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & .form-center-align {
    align-self: center;
  }
  & .blue-regular-text {
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    color: #172234;
  }
`;
export const ErrorMessageStyled = styled.div`
  font-size: 14px;
  line-height: calc(14 / 12);
  color: #da1414;
`;
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  & label {
    font-size: 14px;
    font-weight: 700;
    font-family: Merriweather;
    line-height: 20px;
  }
  & input {
    font-family: Lato;
    font-size: 14px;
    line-height: 22px;
    width: 308px;
    padding: 14px 20px 12px 20px;
    background-color: #e0e0e0;
    outline: none;
    border: unset;
    color: #172234;
    border-radius: 5px;
    /* border: 1px solid
      ${(props) =>
      props.isvalid
        ? "green"
        : props.isvalid === false
        ? "red"
        : "transparent"}; */
    color: #172234;
  }
  & input::placeholder {
    /* font-size: 14px;
    font-family: Lato;
    line-height: 22px;
    color: #172234; */
  }
`;

export const SignupButton = styled.button`
  background-color: #b29f7e;
  outline: none;
  border: unset;
  border-radius: 5px;
  padding: 11px 0;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  font-family: Merriweather;
  margin-top: 30px;
  &:hover {
    background-color: #172234;
  }
`;
