import { Link } from "react-router-dom";
import img from "../assets/bus.jpg";

export default function About() {
  return (
    <div className="flex-1 ">
      <img src={img} alt="" className="h-40 sm:h-60 md:h-72 w-full  " />
      <div className="flex flex-col gap-4 m-4  lg:mx-16 lg:gap-6">
        <div>
          <h1 className="text-lg font-hello  md:text-3xl lg:text-4xl text-[#7f5539] font-bold">
            Welcome to SwiftRide, your premier choice for convenient and
            reliable transportation services.
          </h1>
        </div>
        <div>
          <p className="text-xs md:text-sm lg:text-base text-[#9c6644]">
            Our commitment to excellence is reflected in the quality of our
            vehicles and our dedication to customer satisfaction. SwiftRide
            understands the value of your time and strives to offer punctual and
            efficient transportation solutions. With flexible rental options,
            you can choose the duration that best suits your schedule—be it a
            day, a week, or longer.
          </p>
          <p className="text-xs md:text-sm lg:text-base text-[#9c6644]">
            Join the growing community of satisfied customers who have
            experienced the SwiftRide difference.
          </p>
        </div>
        <div>
          <div className="bg-[#955B43]  max-w-fit lg:text-base rounded-md my-2 py-5 px-2 text-xs md:text-sm text-white ">
            Your Journey is yet to begin.lets see if you like our vehicles.
            <Link to="/bus">
              <button className="bg-zinc-900 block text-white px-3 py-2 mt-2 rounded-md ">
                Explore Our Vehicles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
