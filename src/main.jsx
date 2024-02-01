import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/mainpage";
import Product from "./pages/product";
import Auth from "./pages/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>
);
