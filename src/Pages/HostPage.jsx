import { Outlet } from "react-router-dom";
export default function HostPage() {
  return (
    <>
      <div>The Host Page is Here</div>;
      <Outlet />
    </>
  );
}
