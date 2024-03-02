import React, { useState } from "react";

import logo from "/logo-crop-jpeg.jpg";
import rus from "../assets/ru.png";
import kaz from "../assets/kz.png";
import eng from "../assets/uk.webp";
import compare from "../assets/compare-icon.svg";
import favourite from "../assets/wishlist-icon.svg";
import basket from "../assets/cart-icon.svg";
import profile from "../assets/profile-icon.webp";

import style from "../css/header.module.css";
import CityModal from "../components/citymodal";

export default function Header() {
  const [openCityModal, setOpenCityModal] = useState(false);

  return (
    <header className={style.header}>
      <section className={style.upperHeader}>
        <div className={style.leftDiv}>
          <div style={{ marginLeft: "5px" }}>
            <CityModal
              open={openCityModal}
              onClose={() => setOpenCityModal(false)}
            />
            <button
              onClick={() => setOpenCityModal(true)}
              className="btn btn-primary"
            >
              City
            </button>
          </div>
          <div>
            <button className="btn btn-secondary">
              <a
                href="/addresses"
                style={{ textDecoration: "none", color: "white" }}
              >
                Addresses
              </a>
            </button>
          </div>
          <div>
            <button className="btn btn-dark">Theme</button>
          </div>
        </div>
        <div className={style.rightLangDiv}>
          <button className={style.langButton + " btn btn-outline-secondary"}>
            <img src={rus} width="25" height="25" />
            <span>Rus</span>
          </button>
          <button className={style.langButton + " btn btn-outline-secondary"}>
            <img src={kaz} width="25" height="25" />
            <span>Kaz</span>
          </button>
          <button className={style.langButton + " btn btn-outline-primary"}>
            <img src={eng} width="25" height="25" />
            <span>Eng</span>
          </button>
        </div>
      </section>
      <section className={style.lowerHeader}>
        <div className={style.leftLowerDiv}>
          <div style={{ marginLeft: "5px" }}>
            <a href="#">
              <img className={style.logo} src={logo} />
            </a>
          </div>
          <div>
            <button className="btn btn-info">
              <img />
              Catalogue
            </button>
          </div>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <div className={style.wrapper}>
            <a>
              <div className={style.iconDiv}>
                <img src={favourite} height={24} width={25}></img>
              </div>
              <span>Favourite</span>
            </a>
            <a>
              <div className={style.iconDiv}>
                <img src={compare} height={24} width={25}></img>
              </div>
              <span>Compare</span>
            </a>
            <a>
              <div className={style.iconDiv}>
                <img src={basket} height={24} width={25}></img>
              </div>
              <span>Cart</span>
            </a>
            <a>
              <div className={style.iconDiv}>
                <img src={profile} height={24} width={25}></img>
              </div>
              <span>Log In</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
