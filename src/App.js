import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

import Instamart from "./components/Instamart";


const AppLayout = () => {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer></Footer>
            </>
      );
};

const appRouter = createBrowserRouter([
      {
            path: '/',
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                  {
                        path: '/',
                        element: <Body />
                  },
                  {
                        path: '/about',
                        element: <About />,
                        children: [
                              {
                                    path: "profile",  //if we put / here then it will be localhost:1234/profile.
                                    element: <Profile />
                              }
                        ]
                  },
                  {
                        path: '/Contact',
                        element: <Contact />
                  },
                  {
                        path: '/restaurant/:id',
                        element: <RestaurantMenu />
                  },
                  {
                        path: '/Instamart',
                        element: <Instamart />
                  }
            ]
      }
])


const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter} />);

// import { Body } from "./components/Body";
// const heading = React.createElement(
//       "h1",
//       {
//             id: "title",
//       },
//       "Heading 1"
// );

// const heading = () => {
//       <h1>Title</h1>
// }

/**
 * Structure of website
 *    Header
 *        -logo
 *        -Nav items(right side)
 *        -Cart
 *    Body
 *        -Search bar
 *        -Restaurant Cards
 *                -Food Image
 *                -Name
 *                -Rating
 *                -Distance
 *    Footer
 *          -Copyright
 *          -Disclaimer
 */

//for simulate the work with live data.


// 4th way of recieving props using spread operator.

//passing a react element inside the root

//async defer
