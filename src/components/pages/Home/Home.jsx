import React from "react";
import { Main } from "./Home.styled";


import HeroContent from "./HeroContent/HeroContent";

export default function Home() {
  return (
    <Main>
      <div className="main-container">
        <HeroContent />
      </div>
    </Main>
  );
}
