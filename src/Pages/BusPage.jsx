import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import VehicleList from "../Components/VehicleList";
export default function BusPage() {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-white">
      <Nav />
      <VehicleList />
      <hr className="border-gray-400 mx-3 my-4" />
      <Footer typ="bus" />
    </div>
  );
}
