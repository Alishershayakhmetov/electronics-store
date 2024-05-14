import React, { useEffect, useState } from "react";

import logo from "/logo-crop-jpeg.jpg";
import rus from "../../assets/ru.png";
import kaz from "../../assets/kz.png";
import eng from "../../assets/uk.webp";
import compare from "../../assets/compare-icon.svg";
import favourite from "../../assets/wishlist-icon.svg";
import basket from "../../assets/cart-icon.svg";
import profile from "../../assets/profile-icon.webp";

import style from "./header.module.css";
import CityModal from "../../layouts/citymodal";
import useLanguage from "../../hooks/language/useLanguage";
import { Link } from "react-router-dom";

import { useGetAllProductsQuery } from "../../store/slices/cartSlice";
import { getPersonLanguage } from "../../utils/getPersonLang";

import { useSelector } from "react-redux";

function GetProductAmount() {
  const productCount = useSelector((state) => state.productCount.count);
  const lang = getPersonLanguage();
  const {
    data: response,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery(lang);
  const [data, setData] = useState(response || null);

  useEffect(() => {
    setData(response);
  }, [response]);

  if (isLoading || isError) {
    return null;
  }

  if (data) {
    return (
      <span
        style={{
          position: "absolute",
          top: "-6px",
          right: "-6px",
          display: "flex",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          fontSize: "10px",
          fontWeight: "600",
          lineHeight: "1.8em",
          color: "#fff",
          backgroundColor: "#2196f3",
          borderRadius: "50%",
        }}
      >
        {productCount}
      </span>
    );
  }
}

export default function Header() {
  const [openCityModal, setOpenCityModal] = useState(false);
  const { t, changeLanguage } = useLanguage({ setLanguage: true });

  return (
    <header className={style.header} style={{ paddingBottom: "20px" }}>
      <section className={style.upperHeader}>
        <div className={style.leftDiv}>
          <div style={{ marginLeft: "5px" }}>
            <CityModal
              open={openCityModal}
              onClose={() => {
                setOpenCityModal(false);
              }}
            />
            <button
              onClick={() => {
                setOpenCityModal(true);
                document.body.style.overflow = "hidden"; // Prevent scrolling
              }}
              className="btn btn-primary"
            >
              {t("City")}
            </button>
          </div>
          <div>
            <button className="btn btn-secondary">
              <a
                href="/addresses"
                style={{ textDecoration: "none", color: "white" }}
              >
                {t("Addresses")}
              </a>
            </button>
          </div>
          <div>
            <button className="btn btn-dark">{t("Theme")}</button>
          </div>
        </div>
        <div className={style.rightLangDiv}>
          <button
            className={style.langButton + " btn btn-outline-secondary"}
            onClick={() => changeLanguage("ru")}
          >
            <img src={rus} width="25" height="25" />
            <span>Rus</span>
          </button>
          <button
            className={style.langButton + " btn btn-outline-secondary"}
            onClick={() => changeLanguage("kz")}
          >
            <img src={kaz} width="25" height="25" />
            <span>Kaz</span>
          </button>
          <button
            className={style.langButton + " btn btn-outline-primary"}
            onClick={() => changeLanguage("en")}
          >
            <img src={eng} width="25" height="25" />
            <span>Eng</span>
          </button>
        </div>
      </section>
      <section className={style.lowerHeader}>
        <div className={style.leftLowerDiv}>
          <div style={{ marginLeft: "5px" }}>
            <Link to={"/"}>
              <img className={style.logo} src={logo} />
            </Link>
          </div>
          <div>
            <Link to={"/catalog"}>
              <button className="btn btn-info">
                <img />
                {t("Catalogue")}
              </button>
            </Link>
          </div>
        </div>
        <div className={style.inputContainer}>
          <form>
            {" "}
            {/* */}
            <label className={style.inputLabel}>
              <input
                className={style.inputInput}
                placeholder={t("Find...")}
              ></input>
              <svg></svg>
            </label>
          </form>
        </div>
        <div>
          <div className={style.wrapper}>
            <a>
              <div className={style.iconDiv}>
                <img src={favourite} height={24} width={25}></img>
              </div>
              <span>{t("Favourite")}</span>
            </a>
            <a>
              <div className={style.iconDiv}>
                <img src={compare} height={24} width={25}></img>
              </div>
              <span>{t("Compare")}</span>
            </a>
            <a href={"/basket"} style={{ position: "relative" }}>
              <div className={style.iconDiv}>
                <img src={basket} height={24} width={25}></img>
              </div>
              <span>{t("Cart")}</span>
              <GetProductAmount />
            </a>
            <a>
              <div className={style.iconDiv}>
                <img src={profile} height={24} width={25}></img>
              </div>
              <span>{t("Log In")}</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
