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
import { useActiveUser } from "../../store";

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

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const decoded = jwtDecode(localStorage.getItem("token"));
      setUser(decoded);
    }
  }, []);

  //TODO: Створити сортування по даті
  //TODO: Додати фетч для заповнення даних про резервацію (detail page)
  //TODO: Створити адмінку

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/appartaments" element={<AppartamentsPage />} />
          <Route
            path="/profile"
            element={
              localStorage.getItem("token") ? (
                <ProfilePage />
              ) : (
                // <Navigate
                //   to="/sign-in"
                //   state={{ nextPathname: "/profile" }}
                //   replace
                // />
                <ProfilePage />
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
                <FavoritePage />
              ) : (
                // <Navigate
                //   to="/sign-in"
                //   state={{ nextPathname: "/favorite" }}
                //   replace
                // />
                <FavoritePage />
              )
            }
          />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
};

export default App;
