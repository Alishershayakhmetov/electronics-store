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
    return <span className={style.productCounter}>{productCount}</span>;
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
              <svg
                className="svg-icon"
                style={{
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                width={24}
                height={24}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
                  transform="translate(0,-100)"
                />
              </svg>
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
            <a href={"/basket"} style={{ position: "relative" }}>
              <div className={style.iconDiv}>
                <img src={basket} height={24} width={25}></img>
              </div>
              <span>{t("Cart")}</span>
              <GetProductAmount />
            </a>
            <a href="/login">
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
