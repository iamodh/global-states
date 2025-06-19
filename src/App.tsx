import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import Recoil from "./pages/Recoil";
import Zustand from "./pages/Zustand";
import MyApp from "./pages/ContextAPI";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "recoil", element: <Recoil /> },
        { path: "zustand", element: <Zustand /> },
        { path: "context-api", element: <MyApp /> },
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
