import { Navigate, Outlet } from "react-router-dom";

export default function Auth() {
  const isloggedIn = !false;

  if (!isloggedIn) return <Navigate to="/login" />;

  return (
    <>
      <Outlet />
    </>
  );
}
