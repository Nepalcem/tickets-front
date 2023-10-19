import React from "react";
import { NavButton, NavTag } from "./HeaderNav.styled";

export default function HeaderNav() {
  return (
    <NavTag>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/login">Login</NavButton>
      <NavButton to="/signup">Signup</NavButton>
    </NavTag>
  );
}
