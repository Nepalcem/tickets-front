import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDeals, selectAreDealsLoading } from "../../redux/selectors";
import { fetchDeals } from "../../redux/deals/dealsOperations";
import { ProgressBarDiv, ProgressBarStyled, DealsList, MainContainer, DealPageTitle } from "./Deals.styled";
import DealItem from "./DealItem/DealItem";

export default function Deals() {
  const dispatch = useDispatch();
  const deals = useSelector(selectDeals);
  const loading = useSelector(selectAreDealsLoading);

  
  useEffect(() => {
    if (deals.length > 0) {
      return;
    }
    dispatch(fetchDeals());
  }, [dispatch, deals.length]);

  return (
    <MainContainer>
      <DealPageTitle>Open Deals</DealPageTitle>
      {loading ? (
        <ProgressBarDiv>
          <ProgressBarStyled ariaLabel="progress-bar-loading" />
        </ProgressBarDiv>
      ) : (
        <DealsList>
            {deals.map((deal) => (
            <DealItem key={deal.deal_id} deal={deal} />
          ))}
        </DealsList>
      )}
    </MainContainer>
  );
}
