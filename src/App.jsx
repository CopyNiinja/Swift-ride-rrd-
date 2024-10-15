import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AboutPage from "./Pages/AboutPage";
import BusDetails from "./Pages/BusDetails";
import BusPage from "./Pages/BusPage";

import HomePage from "./Pages/HomePage";
import MicroPage from "./Pages/MicroPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bus" element={<BusPage />} />
          <Route path="/bus/:id" element={<BusDetails />} />
          <Route path="/micro" element={<MicroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
