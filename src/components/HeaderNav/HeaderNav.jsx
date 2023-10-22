import React from "react";
import { NavButton, NavTag, NavigationButton } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "../redux/auth/authOperations";

export default function HeaderNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logOut())
  }

  return (
    <NavTag>
      <NavButton to="/">Home</NavButton>
      {!isLoggedIn ? (
        <>
          <NavButton to="/login">Login</NavButton>
          <NavButton to="/signup">Signup</NavButton>
        </>
      ) : (
        <>
          <NavButton to="/deals">
            Deals
          </NavButton>
          <NavigationButton onClick={handleLogout}>
            Log Out
          </NavigationButton>
        </>
      )}
    </NavTag>
  );
}
