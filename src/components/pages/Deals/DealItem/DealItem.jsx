import React from "react";
import {
  StyledDealItem,
  StyledDealTitle,
  DescriptionBox,
} from "./DealItem.styled";

export default function DealItem(deal) {

  const { deal_id, title, image, ticket,price, days_left, sold } = deal.deal;

  return (
      <StyledDealItem id={deal_id} >
          <img src={image} alt="title" />
      <StyledDealTitle>{title}</StyledDealTitle>
      <DescriptionBox>
        <p className="description-text">{parseInt(price)} Dhs</p>
        <p className="description-text">Yield 9.25%</p>
        <p className="description-text">Sold {sold}</p>
        <p className="description-text">Tiket - {ticket} Dhs</p>
        <p className="description-text">Days left {days_left}</p>
      </DescriptionBox>
    </StyledDealItem>
  );
}
