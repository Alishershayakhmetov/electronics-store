import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage";
import Product from "./pages/product";
import Auth from "./pages/auth";
import Error404 from "./pages/404page";
import CatalogPage from "./pages/catalogpage";
import SearchPage from "./pages/searchpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route exact path="/login" element={<Auth />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/123" element={<SearchPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
