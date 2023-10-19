import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
  & .main-container {
    margin: 0 auto;
    max-width: 1440px;
    position: relative;
  }
`;

export const HeroImg = styled.img`
  display: inline-block;
  position: absolute;
  left:0;
  top: -82px;
  z-index: -2;
`;

export const HeroTransparentImg = styled.img`
  display: inline-block;
  position: absolute;
  left: 0;
  top: -82px;
  z-index: -1;
`;
