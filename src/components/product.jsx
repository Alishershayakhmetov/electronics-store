import React from "react";
import ImageCarousel from "./carousel";
import style from "../css/product.module.css";

export default function Product() {
  const images = [
    { src: "1.webp", alt: "image 1" },
    { src: "2.webp", alt: "image 2" },
    { src: "3.webp", alt: "image 3" },
    { src: "4.webp", alt: "image 4" },
    { src: "5.webp", alt: "image 5" },
  ];

  return (
    <>
      <ul className={style.path}>
        {" "}
        {/*storing product path in the website */}
        <li>
          <a>main</a>
          <svg
            style={{ margin: "0 2px", width: "16px", height: "16px" }}
            fill="none"
            stroke="true"
            viewBox="0 0 24 24 "
          >
            <path
              d="M8 19.84L14.52 13.32C15.29 12.55 15.29 11.29 14.52 10.52L8 4"
              stroke="#606971"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></path>
          </svg>
        </li>
        <li>
          <a>stereo</a>
          <svg
            style={{ margin: "0 2px", width: "16px", height: "16px" }}
            fill="none"
            stroke="true"
            viewBox="0 0 24 24 "
          >
            <path
              d="M8 19.84L14.52 13.32C15.29 12.55 15.29 11.29 14.52 10.52L8 4"
              stroke="#606971"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></path>
          </svg>
        </li>
        <li>
          <a>page</a>
          <svg
            style={{ margin: "0 2px", width: "16px", height: "16px" }}
            fill="none"
            stroke="true"
            viewBox="0 0 24 24 "
          >
            <path
              d="M8 19.84L14.52 13.32C15.29 12.55 15.29 11.29 14.52 10.52L8 4"
              stroke="#606971"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></path>
          </svg>
        </li>
      </ul>
      <article className={style.article}>
        <div className={style.productBlock}>
          <div>
            <div>
              <h2 className={style.productName}>
                Игровой ноутбук Asus TUF Gaming F15 i5 12500H/ 16ГБ / 512SSD /
                RTX3050 4ГБ / 15.6 / DOS / (FX507ZC4-HN143)
              </h2>
            </div>
            <div className={style.productInfo}>
              <div>
                <ImageCarousel images={images} />
              </div>
              <div>
                <p className={style.descriptionHeader}>Description:</p>
                <div className={style.descriptionInfo}>
                  <div className={style.descriptionItem}>
                    <div>Display size</div>
                    <div className={style.dotDiv}></div>
                    <div>15.6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.priceBlock}>
          {" "}
          {/*price div */}
          <div>
            <p>ID: 1234567890</p>
          </div>
          <div>
            <p>439 990 ₸</p>
            <p>up to 21 000 Bonuses</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="btn btn-success"
                style={{ width: "90%", margin: "auto" }}
              >
                Buy
              </button>
            </div>
          </div>
          <div className={style.btnBlock}>
            <button className="btn">
              <img src={"../src/assets/compare.png"} width="20" height="20" />
              compare
            </button>
            <div>
              <button
                className="btn"
                style={{
                  borderLeft: " 1px solid #f4f4f4",
                  borderRight: " 1px solid #f4f4f4",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={"../src/assets/favourite-heart.svg"}
                  width="20"
                  height="20"
                />
                favourite
              </button>
            </div>
            <button className="btn">
              <img src={"../src/assets/share.svg"} width="20" height="20" />
              share
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
