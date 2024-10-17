import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="flex-1 items-center bg-image text-white  px-3 sm:px-6 md:px-8">
      <div className="flex flex-col h-96 sm:h-[28rem] md:h-[32rem]  gap-2 sm:gap-4 md:gap-8 sm:px-6 md:px-8 justify-center">
        <h1 className="main-heading ">
          <span className="text-orange-100  ">Experience SwiftRide:</span> Your
          Quick, Reliable Journey Starts Here
        </h1>
        <div>
          <p className="sub-heading text-gray-200">
            Embark on a swift journey where every ride is a symphony of speed
            and reliability. Let the wind guide your path as you explore new
            horizons with SwiftRide. Your adventure begins with a promise of
            comfort and ease.
          </p>
          <button className="sub-heading rounded-sm border-2 px-4 py-2 tracking-widest font-bold border-orange-100 text-orange-50 backdrop-blur-sm hover:bg-orange-100   hover:text-gray-600 hover:-translate-y-0.5 hover:duration-300">
            <p className="font-hello">
              <Link to="/bus">Take Our Ride</Link>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
