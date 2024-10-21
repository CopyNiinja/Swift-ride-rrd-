import { NavLink, Outlet } from "react-router-dom";
export default function LayoutHost() {
  return (
    <div className="flex-1  bg-orange-100">
      <ul className="px-2 pt-8 text-sm sm:px-5 sm:text-base md:text-lg lg:text-xl md:px-8 lg:px-10 flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 ">
        <li>
          <NavLink
            end
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to="."
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to="income"
          >
            Income
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
