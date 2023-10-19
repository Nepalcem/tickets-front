import React from "react";
import { Main, HeroImg, HeroTransparentImg } from "./Home.styled";
import HeroBg from "../../images/image_home.jpg";
import HeroTransparentBg from '../../images/image-home-overlay.png';
import HeroContent from "./HeroContent/HeroContent";

export default function Home() {
  return (
    <Main>
      <div className="main-container">
        <HeroImg src={HeroBg} alt="hero-background" />
        <HeroTransparentImg src={HeroTransparentBg} alt="transparent"/>
        <HeroContent />
      </div>
    </Main>
  );
}
