import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../../components/Loader";
import Homepage from "../../pages/Home";
import SigninIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Flights from "../../pages/Flights";
import Appartaments from "../../pages/Apartments";
import Profile from "../../pages/Profile";
import SearchFlights from "../../pages/SearchFlights";
import SinglePageFlights from "../../pages/SingleFlights";

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SigninIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/appartaments" element={<Appartaments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search-flights" element={<SearchFlights />} />
        <Route path="/flights/:flightId" element={<SinglePageFlights />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
