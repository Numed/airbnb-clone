import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Loader from "../../components/Loader";
import Homepage from "../../pages/Home";

const App = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
