import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import RecoilHome from "./pages/RecoilHome";
import ZustandHome from "./pages/ZustandHome";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "recoil", element: <RecoilHome /> },
      { path: "zustand", element: <ZustandHome /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
};

export default App;
