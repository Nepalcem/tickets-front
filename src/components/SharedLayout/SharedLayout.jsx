import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ProgressBarDiv, ProgressBarStyled } from "../pages/Deals/Deals.styled";

import Header from "../Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <ProgressBarDiv>
            <ProgressBarStyled ariaLabel="progress-bar-loading" />
          </ProgressBarDiv>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
