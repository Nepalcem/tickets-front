import styled from "styled-components";
import { desktop } from "../utils/mobileBreakpoints";

export const StyledLogo = styled.a`
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 28px;
  font-family: Merriweather;
  line-height: 34px;
  &:hover {
    color: #b29f7e;
  }
`;

export const LogoP = styled.p`
  @media screen and (max-width: ${desktop}) {
    display: none;
  }
`;
