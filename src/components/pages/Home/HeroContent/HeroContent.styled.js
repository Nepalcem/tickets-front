import styled from "styled-components";

export const HeroContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 297px 0;
  & .hero-text {
    font-size: 24px;
    line-height: 32px;
    max-width: 822px;
    color: #fff;
    margin-bottom: 30px;
  }
  & .hero-button {
    background-color: unset;
    border: 1px solid #fff;
    display: inline-block;
    border-radius: 8px;
    font-family: Merriweather;
    font-size: 20px;
    line-height: 34px;
    transition: all 0.3s ease-in-out;
    color: #fff;
    font-weight: 700;
    padding: 10px 24px;
    cursor: pointer;
    &:hover {
      background-color: #b29f7e;
      border-color: #b29f7e;
    }
  }
`;
export const HeroH1 = styled.h1`
  font-family: Merriweather;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  color: #fff;
`;
