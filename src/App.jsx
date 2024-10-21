import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout";
import LayoutHost from "./Components/LayoutHost";
import VehicleList, { loader as vanLoader } from "./Components/VehicleList";
import AboutPage from "./Pages/AboutPage";
import Auth from "./Pages/Auth";
import BusDetails from "./Pages/BusDetails";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import Income from "./Pages/Income";
import Login from "./Pages/Login";
import MicroPage from "./Pages/MicroPage";
import Reviews from "./Pages/Reviews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<h1>There was an error</h1>}>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route element={<Auth />}>
        <Route path="host" element={<LayoutHost />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="about" element={<AboutPage />} />
      <Route path="bus" element={<VehicleList />} loader={vanLoader} />
      <Route path="bus/:id" element={<BusDetails />} />
      <Route path="micro" element={<MicroPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
