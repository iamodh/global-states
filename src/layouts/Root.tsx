import { Link, Outlet } from "react-router";

export default function Root() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recoil">Recoil (동작 안 함)</Link>
          </li>
          <li>
            <Link to="/zustand">Zustand</Link>
          </li>
          <li>
            <Link to="/context-api">ContextAPI</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
