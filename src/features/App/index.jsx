import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, useEffect } from "react";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import Loader from "../../components/Loader";
import { useActiveUser, useFlightsCities, useHotelsCities } from "../../store";
import { FlightsService } from "../../services/flights";
import { HotelsServices } from "../../services/hotels";
import { notifyError } from "../../utils/notifications";

const DashboardPage = lazy(() => import("../../pages/Dashboard"));
const DetailsPage = lazy(() => import("../../pages/Details"));
const FavoritePage = lazy(() => import("../../pages/Favorite"));
const SinglePageFlights = lazy(() => import("../../pages/SingleFlights"));
const SinglePageApps = lazy(() => import("../../pages/SingleApps"));
const SearchFlights = lazy(() => import("../../pages/SearchFlights"));
const SearchApps = lazy(() => import("../../pages/SearchApps"));
const ProfilePage = lazy(() => import("../../pages/Profile"));
const AppartamentsPage = lazy(() => import("../../pages/Apartments"));
const FlightsPage = lazy(() => import("../../pages/Flights"));
const SignInPage = lazy(() => import("../../pages/SignIn"));
const SignUpPage = lazy(() => import("../../pages/SignUp"));
const HomePage = lazy(() => import("../../pages/Home"));

const App = () => {
  const { setUser } = useActiveUser();
  const { setHotelsCities } = useHotelsCities();
  const { setFlightsCities } = useFlightsCities();
  const { getFlightCities } = FlightsService();
  const { getAppCities } = HotelsServices();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const decoded = jwtDecode(localStorage.getItem("token"));
      setUser(decoded);
    }
  }, []);

  useEffect(() => {
    Promise.all([getAppCities(), getFlightCities()])
      .then(([hotelsRes, flightsRes]) => {
        setHotelsCities(hotelsRes);
        setFlightsCities(flightsRes);
      })
      .catch((err) => {
        notifyError(err);
      });
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/appartaments" element={<AppartamentsPage />} />
          <Route path="/search-flights" element={<SearchFlights />} />
          <Route path="/flights/:id" element={<SinglePageFlights />} />
          <Route path="/search-appartaments" element={<SearchApps />} />
          <Route path="/appartaments/:id" element={<SinglePageApps />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") ? (
                <DashboardPage />
              ) : (
                <Navigate
                  to="/sign-in"
                  state={{ nextPathname: "/profile" }}
                  replace
                />
              )
            }
          />

          <Route
            path="/profile"
            element={
              localStorage.getItem("token") ? (
                <ProfilePage />
              ) : (
                <Navigate
                  to="/sign-in"
                  state={{ nextPathname: "/profile" }}
                  replace
                />
              )
            }
          />
          <Route
            path="/favorite"
            element={
              localStorage.getItem("token") ? (
                <FavoritePage />
              ) : (
                <Navigate
                  to="/sign-in"
                  state={{ nextPathname: "/favorite" }}
                  replace
                />
              )
            }
          />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
};

export default App;
