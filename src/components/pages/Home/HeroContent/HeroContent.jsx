import React from "react";
import { HeroH1, HeroContentDiv } from "./HeroContent.styled";

export default function HeroContent() {
  return (
    <HeroContentDiv>
      <HeroH1>The chemical negatively charged</HeroH1>
      <p className="hero-text">
        Numerous calculations predict, and experiments confirm, that the force
        field reflects the beam, while the mass defect is not formed. The
        chemical compound is negatively charged. Twhile the mass defect is{" "}
      </p>
      <button className="hero-button">Get started</button>
    </HeroContentDiv>
  );
}
