import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
export default function BusDetails() {
  const location = useLocation();
  const { name, description, type, price, imageUrl } = location.state;

  return (
    <div className="h-dvh flex flex-col bg-orange-100">
      <Nav />
      <div className="flex-1 flex flex-col pt-6 bg-orange-100 gap-4 px-4 sm:px-8 md:px-8 md:flex-row lg:px-20 ">
        <div>
          <img
            src={imageUrl}
            alt={name}
            className="w-full sm:max-w-[585px]  md:flex-1 max-h-[28rem] rounded-md"
          />
        </div>
        <div className="md:flex-1 flex flex-col md:space-y-8">
          <div>
            <p className="text-sm italic mb-2 sm:text-base md:text-lg md:mb-4">
              {type}
            </p>
            <p className="text-lg font-bold md:text-2xl text-orange-950">
              {name}
            </p>
          </div>
          <p className="text-gray-800 text-lg font-bold md:text-3xl">
            {price}$ <span className="text-xs">/day</span>
          </p>
          <div>
            <p className="text-sm md:text-md lg:text-lg mb-2 md:mb-4">
              {description}
            </p>
            <button className="text-xs   rounded-md px-2 py-2 md:text-sm md:px-3 md:py-2 mb-4  hover:bg-orange-950 bg-orange-800 text-white">
              Rent this vehicle
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
