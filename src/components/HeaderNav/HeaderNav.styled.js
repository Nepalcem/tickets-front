import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { desktop, tablet } from "../utils/mobileBreakpoints";

export const NavButton = styled(NavLink)`
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #b29f7e;
  padding-top: 11px;
  padding-bottom: 11px;
  display: block;
  width: 80px;
  @media screen and (min-width: ${tablet}) {
    width: 120px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 160px;
  }
  border: 1px solid #b29f7e;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #b29f7e;
  }
  &.active {
    color: #fff;
    background-color: #b29f7e;
  }
`;

export const NavTag = styled.nav`
display: flex;
gap: 10px;
margin: 18px 0px;
`;

export const NavigationButton = styled.a`
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #b29f7e;
  padding-top: 11px;
  padding-bottom: 11px;
  display: block;
  width: 160px;
  border: 1px solid #b29f7e;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #b29f7e;
  }
  &.active {
    color: #fff;
    background-color: #b29f7e;
  }
`;