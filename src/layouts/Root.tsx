import { Outlet } from "react-router";

export default function Root() {
  return (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
}
