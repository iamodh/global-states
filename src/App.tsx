import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import RecoilHome from "./pages/Recoil";
import ZustandHome from "./pages/Zustand";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "recoil", element: <RecoilHome /> },
        { path: "zustand", element: <ZustandHome /> },
      ],
    },
  ],

  {
    basename: "/global-states",
  }
);

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
