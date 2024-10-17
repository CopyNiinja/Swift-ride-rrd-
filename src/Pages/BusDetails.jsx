import { Link, useLocation } from "react-router-dom";

export default function BusDetails() {
  const location = useLocation();
  const { name, description, type, price, imageUrl } = location.state;

  return (
    <div className="min-h-dvh flex flex-col bg-orange-100">
      <div className="flex-1 flex  flex-col pt-6 bg-orange-100  gap-4 px-4 sm:px-8 md:px-8 md:flex-row lg:px-20 ">
        <div>
          <Link to="/bus">
            <div className="ml-2 text-sm md:text-base mb-1 w-fit text-gray-800 italic hover:text-red-900 transition-all duration-1000 hover:scale-x-110 hover:-ml-1  ">
              {"<<"}Back
            </div>
          </Link>
          <img
            src={imageUrl}
            alt={name}
            className="w-full sm:max-w-[585px]  md:flex-1 max-h-[28rem] rounded-md"
          />
        </div>
        <div className="md:flex-1 flex flex-col md:mt-8 md:space-y-8">
          <div className="text-sm md:text-base">
            {type === "simple" ? (
              <p className="text-gray-700">simple</p>
            ) : type === "rugged" ? (
              <p className="text-emerald-700">rugged</p>
            ) : (
              <p className="text-purple-700">Luxury</p>
            )}
            <p className="text-2xl font-bold md:text-4xl font-hello text-orange-950">
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
            <button className="text-xs   rounded-md px-2 py-2 md:text-sm md:px-3 md:py-2 mb-4  hover:bg-orange-950 bg-orange-800 text-white ">
              Rent this vehicle
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
