import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import Recoil from "./pages/Recoil";
import Zustand from "./pages/Zustand";
import MyApp from "./pages/ContextAPI";
import CounterButtonContainer from "./pages/Redux";
import { Provider } from "react-redux";
import store from "./libs/redux/store/store";

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
        { path: "redux", element: <CounterButtonContainer /> },
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
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </RecoilRoot>
    </>
  );
};

export default App;
