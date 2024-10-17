import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout";
import LayoutHost from "./Components/LayoutHost";
import AboutPage from "./Pages/AboutPage";
import BusDetails from "./Pages/BusDetails";
import BusPage from "./Pages/BusPage";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import Income from "./Pages/Income";
import MicroPage from "./Pages/MicroPage";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="host" element={<LayoutHost />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="bus" element={<BusPage />} />
            <Route path="bus/:id" element={<BusDetails />} />
            <Route path="micro" element={<MicroPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
