import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, useEffect, useState, Suspense } from "react";
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
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, [token, setUser]);

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
              token ? <DashboardPage /> : <Navigate to="/sign-in" replace />
            }
          />
          <Route
            path="/profile"
            element={
              token ? <ProfilePage /> : <Navigate to="/sign-in" replace />
            }
          />
          <Route
            path="/favorite"
            element={
              token ? <FavoritePage /> : <Navigate to="/sign-in" replace />
            }
          />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
};

export default App;
