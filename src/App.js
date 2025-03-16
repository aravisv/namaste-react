import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import useDummyUser from "./utils/useDummyUser";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/About"));
const Header = lazy(() => import("./components/Header"));
const Body = lazy(() => import("./components/Body"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const { getUser } = useDummyUser();
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.userName);
    });
  }, []);

  return (
    <UserContext.Provider value={{ userName: user }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="p-4">
              <Body />
            </div>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="p-4">
              <About />
            </div>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="p-4">
              <Contact />
            </div>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="p-4">
              <RestaurantMenu />
            </div>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
