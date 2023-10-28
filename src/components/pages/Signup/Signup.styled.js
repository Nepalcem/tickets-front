import styled from "styled-components";
import { desktop } from "../../utils/mobileBreakpoints";

export const SignupImage = styled.img`
  display: inline-block;
`;

export const SignUpMain = styled.main`
  & .main-container {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: ${desktop}) {
      margin: 0 auto;
      max-width: 1440px;
      flex-direction: row;
    }
  }
`;
export const FormBlock = styled.div`
  @media screen and (min-width: ${desktop}) {
    padding: 255px 100px;
  }
  margin: 0 auto;
  padding: 50px;
  & .login-title {
    font-size: 28px;
    color: #172234;
    font-weight: 700;
    font-family: Merriweather;
    line-height: 34px;
    margin-bottom: 20px;
  }
`;
