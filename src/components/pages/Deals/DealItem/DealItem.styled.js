import styled from "styled-components"

export const StyledDealItem = styled.li`
  position: relative;
  & img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  width: 616px;
  border-radius: 5px;
  padding: 287px 0 20px 14px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledDealTitle = styled.h3`
  color: #fff;
  font-family: Merriweather;
  font-size: 20px;
  line-height: 34px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const DescriptionBox = styled.div`
display: flex;
flex-wrap: wrap;
& .description-text {
    margin-right: 60px;
    margin-bottom: 10px;
    flex-basis: 145px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
}
`;