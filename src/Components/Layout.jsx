import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout() {
  return (
    <div className="flex flex-col justify-between min-h-dvh">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
