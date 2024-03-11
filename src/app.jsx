import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Major from "./pages/main/major";
import Footer from "./components/footer/footer";
import Product from "./pages/product/product";
import Catalog from "./pages/catalog/catalog";
import Search from "./pages/search/search";
import Lang from "./hooks/language/language";
import Error404 from "./pages/404page/404comp";
import AuthWindow from "./pages/login/authWindow";

const App = () => {
  const { t, changeLanguage } = Lang();

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header t={t} changeLanguage={changeLanguage} />
              <Major />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Header t={t} changeLanguage={changeLanguage} />
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
              <Header t={t} changeLanguage={changeLanguage} />
              <Catalog />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog/123"
          element={
            <>
              <Header t={t} changeLanguage={changeLanguage} />
              <Search />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header t={t} changeLanguage={changeLanguage} />
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
