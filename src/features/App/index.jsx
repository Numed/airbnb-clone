import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../../components/Loader";
import Homepage from "../../pages/Home";
import SigninIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SigninIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
