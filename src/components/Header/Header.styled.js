import styled from "styled-components";
import { desktop } from "../utils/mobileBreakpoints";
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${desktop}) {
    padding: 0 80px;
    justify-content: space-between;
  }
  background-color: #172234;
  align-items: center;
  & .logo {
    font-family: Merriweather;
    font-size: 28px;
    line-height: 34px;
    color: #fff;
  }
`;

export const HeaderTag = styled.header``;
