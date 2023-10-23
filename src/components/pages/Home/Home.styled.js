import styled from "styled-components";
import HeroBg from "../../images/image_home.jpg";
import HeroTransparentBg from "../../images/image-home-overlay.png";
import { desktop } from "../../utils/mobileBreakpoints";

export const Main = styled.main`
  text-align: center;
  & .main-container {
    margin: 0 auto;
    max-width: ${desktop};
    position: relative;
    background-image: url(${HeroTransparentBg}), url(${HeroBg});
    background-position: top;
    background-repeat: no-repeat;
  }
`;
