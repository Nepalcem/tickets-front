import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import { Container, HeaderDiv, HeaderTag } from "./Header.styled";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <HeaderTag>
      <Container>
        <HeaderDiv>
          <Logo />
          <HeaderNav />
        </HeaderDiv>
      </Container>
    </HeaderTag>
  );
}
