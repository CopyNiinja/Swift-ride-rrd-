import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" p-2  sm:px-5 md:px-8 lg:px-10 lg:pr-16 bg-orange-100 flex justify-between">
      <h1 className="text-lg font-bold">
        <Link to="/">
          SWIFT<span className="text-gray-600">RIDE</span>
        </Link>
      </h1>
      <ul className="flex items-center justify-center sm:text-sm md:text-base  md:pr-6 md:space-x-4 lg:space-x-6 font-medium text-gray-500 text-xs space-x-2">
        <li>
          <Link to="/host">Host</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/bus">Bus</Link>
        </li>
        {/* <li>
          <Link to="/micro">Micro</Link>
        </li> */}
      </ul>
    </div>
  );
}
