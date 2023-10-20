import { ProgressBar } from "react-loader-spinner";
import styled from "styled-components";

export const ProgressBarStyled = styled(ProgressBar)`
  height: 80px;
  width: 80px;

  border-color: #f4442e;
  .progress-bar-wrapper {
    background-color: #3f51b5;
    border-color: #f4442e;
  }
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const DealsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 80px;
`;

export const DealPageTitle = styled.h2`
  font-size: 28px;
  font-family: Merriweather;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 20px;
  margin-top: 50px;
  color: #b29f7e;
`;