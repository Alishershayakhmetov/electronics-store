import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Major from "./pages/main/major";
import Footer from "./components/footer/footer";
import Product from "./pages/product/product";
import Catalog from "./pages/catalog/catalog";
import Search from "./pages/search/search";
import Error404 from "./pages/404page/404comp";
import AuthWindow from "./pages/login/authWindow";
import Basket from "./pages/basket/basket";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Major />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>
          }
        />
        <Route exact path="/login" element={<AuthWindow />} />
        <Route
          path="/catalog"
          element={
            <>
              <Header />
              <Catalog />
              <Footer />
            </>
          }
        />

        <Route
          path="/catalog/:category"
          element={
            <>
              <Header />
              <Search />
              <Footer />
            </>
          }
        />

        <Route
          path="/basket"
          element={
            <>
              <Header />
              <Basket />
              <Footer />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Header />
              <Error404 />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
