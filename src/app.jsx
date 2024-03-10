import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/mainpage";
import ProductPage from "./pages/product/productpage";
import Auth from "./pages/login/auth";
import Error404Page from "./pages/404page/404page";
import CatalogPage from "./pages/catalog/catalogpage";
import SearchPage from "./pages/search/searchpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route exact path="/login" element={<Auth />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/123" element={<SearchPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
};

export default App;
