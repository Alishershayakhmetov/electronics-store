import React from "react";
import ImageCarousel from "./carousel";
import style from "./product.module.css";
import PathMaker from "../../components/pathmaker/pathMaker";
import Description from "./descriptions";
import Characteristics from "./characteristics";

export default function Product() {
  const images = [
    { src: "1.webp", alt: "image 1" },
    { src: "2.webp", alt: "image 2" },
    { src: "3.webp", alt: "image 3" },
    { src: "4.webp", alt: "image 4" },
    { src: "5.webp", alt: "image 5" },
  ];

  const description = {
    "Display size": 15.6,
    "Processor series": "Intel Core I5",
    "Processor model": "12500H",
    "Operational memory, Gb": "16",
  };

  const path = ["main", "computers", "asus"];

  const characteristics = {
    Memory: {
      "SSD storage capacity, GB": 512,
      "Drive type": "SSD",
      "Number of M.2 slots": 2,
      "RAM capacity, GB": 16,
    },
    Video: {
      "Video card model": "NGF RTX 3050",
      "Video memory capacity, GB": 4,
      "Video card type": "Discrete",
    },
    dimensions: {
      "Width, mm": 354,
      "Thickness, mm": 249,
      "Length, mm": 251,
      "Weight, kg": 2.2,
      "Housing material": "Plastic",
    },
    Interfaces: {
      "Connectors on the housing":
        "HDMI, Jack 3.5 mm, LAN разъем, RJ45, Thunderbolt 4, USB 3.2 Gen 2",
    },
    Display: {
      "Display resolution": "1920x1080 Full HD",
      "Display diagonal, inch": 15.6,
      "Brightness (Nit)": 250,
      "Screen refresh rate": "144Hz",
      "Screen matrix type": "IPS",
    },
    "Main features": {
      Series: "Asus TUF Gaming F15",
      "Notebook class": "For games and production",
    },
    Processor: {
      "Processor manufacturer": "Intel",
      "Processor model": "12500H",
      "Количество ядер": 12,
      "Integrated graphics core": "Intel Iris Xe Graphics",
      "Processor series": "Intel Core I5",
      "Processor frequency, GHz": 2.5,
      Generation: "12st generation (Alder Lake)",
    },
    "Additional features": {
      "Built-in webcam": "HD",
      "Keyboard backlighting": "Yes",
      "Functions and features": "Aura Sync, Dolby Atmos",
    },
    "Operational system (OS)": {
      "Operational system": "DOS",
    },
    "Network connections": {
      Bluetooth: "Yes",
      "Wi-Fi support": "Yes",
    },
  };

  return (
    <main
      style={{
        backgroundColor: "#F0F1F2",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <PathMaker path={path} />
      <article className={style.article}>
        <div className={style.productContainer}>
          <div className={style.productBlock}>
            <div>
              <h2 className={style.productName}>
                Игровой ноутбук Asus TUF Gaming F15 i5 12500H/ 16ГБ / 512SSD /
                RTX3050 4ГБ / 15.6 / DOS / (FX507ZC4-HN143)
              </h2>
            </div>
            <div className={style.productInfo}>
              <ImageCarousel images={images} />
              <Description description={description} />
            </div>
          </div>
          <div className={style.productBlock}>
            <Characteristics data={characteristics} />
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
    </main>
  );
}
