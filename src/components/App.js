import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import { selectIsRefreshing } from "./redux/selectors";
const Home = lazy(() => import("./pages/Home/Home"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Login = lazy(() => import("./pages/Login/Login"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (<>
      <ToastContainer autoClose={4000} theme="colored" />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/signup"
            element={<RestrictedRoute component={Signup} redirectTo="/deals" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} redirectTo="/deals" />}
          />
          <Route
            path="/deals"
            element={<PrivateRoute component={Deals} redirectTo="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>)
  );
}

export default App;
