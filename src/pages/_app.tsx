import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from './pages/login.jsx';
// import RegisterPage from './pages/register.jsx';
// import ErrorPage from './pages/404.jsx';
// import ProductsPage from './pages/product';
// import ProfilePage from './pages/profile';
// import DetailProductPage from './pages/detailProduct';
// import {Provider} from "react-redux";
import store from "@/redux/store";
// import Navbar from './components/layouts/Navbar';
import DarkModeContextProvider from "@/context/DarkMode";
import { TotalPriceProvider } from "@/context/TotalPriceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <DarkModeContextProvider>
        <Component {...pageProps} />
      </DarkModeContextProvider> */}

      <Provider store={store}>
        <DarkModeContextProvider>
          <TotalPriceProvider>
            {/* <RouterProvider router={router} /> */}
            <Component {...pageProps} />
          </TotalPriceProvider>
        </DarkModeContextProvider>
      </Provider>
    </>
  );
}
