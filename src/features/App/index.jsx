import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import Loader from "../../components/Loader";
import Homepage from "../../pages/Home";
import SigninIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Flights from "../../pages/Flights";
import Appartaments from "../../pages/Apartments";
import Profile from "../../pages/Profile";
import SearchFlights from "../../pages/SearchFlights";
import SinglePageFlights from "../../pages/SingleFlights";
import SearchApps from "../../pages/SearchApps";
import SinglePageApps from "../../pages/SingleApps";
import Favorite from "../../pages/Favorite";
import Details from "../../pages/Details";
import { useActiveUser } from "../../store";

const App = () => {
  const { setUser } = useActiveUser();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const decoded = jwtDecode(localStorage.getItem("token"));
      setUser(decoded);
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SigninIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/appartaments" element={<Appartaments />} />
          <Route
            path="/profile"
            element={
              localStorage.getItem("token") ? (
                <Profile />
              ) : (
                <Navigate
                  to="/sign-in"
                  state={{ nextPathname: "/profile" }}
                  replace
                />
              )
            }
          />
          <Route path="/search-flights" element={<SearchFlights />} />
          <Route path="/flights/:id" element={<SinglePageFlights />} />
          <Route path="/search-appartaments" element={<SearchApps />} />
          <Route path="/appartaments/:id" element={<SinglePageApps />} />
          <Route
            path="/favorite"
            element={
              localStorage.getItem("token") ? (
                <Favorite />
              ) : (
                <Navigate
                  to="/sign-in"
                  state={{ nextPathname: "/favorite" }}
                  replace
                />
              )
            }
          />
          <Route path="/details" element={<Details />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
};

export default App;
