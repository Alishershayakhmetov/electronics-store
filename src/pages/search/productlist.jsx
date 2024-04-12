import { useState, useRef } from "react";
import style from "./productlist.module.css";
import useLanguage from "../../hooks/language/useLanguage";

function ProductCarousel({ imageURLs }) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    const containerLeft = imageRef.current.getBoundingClientRect().left;
    let mouseX = event.pageX - containerLeft;
    const containerWidth = imageRef.current.offsetWidth;
    const sliceWidth = containerWidth / Math.min(imageURLs.length, 5);

    const newIndex = Math.floor(mouseX / sliceWidth);
    if (
      newIndex !== imageIndex &&
      newIndex >= 0 &&
      newIndex < Math.min(imageURLs.length, 5)
    ) {
      setImageIndex(newIndex);
    }
  };

  return (
    <div className={style.productCartCarouselDiv}>
      <div className={style.slideWrapper}>
        <div className={style.slider}>
          <div
            className={style.slideItem}
            onMouseMove={handleMouseMove}
            ref={imageRef}
            onMouseLeave={() => setImageIndex(0)}
          >
            <img
              src={imageURLs[imageIndex]}
              className={style.productImg}
              width="140"
              height="140"
            />
          </div>
        </div>
      </div>
      <div className={style.strip}>
        {imageURLs.map((_, index) => (
          <span
            key={index}
            className={index === imageIndex ? style.spanActive : ""}
            role="button"
            tabIndex={index}
          ></span>
        ))}
      </div>
    </div>
  );
}

function Product({ number, data }) {
  let lang = localStorage.getItem("preferredLanguage");
  lang = lang.charAt(0).toUpperCase() + lang.slice(1);
  const { t } = useLanguage();
  const generateProduct = () => {
    const liElements = [];

    for (let i = 0; i < number; i++) {
      liElements.push(
        <li key={i} className={style.productItem}>
          <a style={{ outline: "none" }} href={`/product/${data[i].name}`}>
            <div className={style.itemDiv}>
              <div className={style.itemImgBlock}>
                <div className={style.itemImgDiv}>
                  <ProductCarousel imageURLs={data[i].imageURLs} />
                </div>
              </div>
              <div className={style.itemTitle}>
                <div className={style.productTitleDiv}>
                  <p className={style.title}>{t(data[i][`name${lang}`])}</p>
                </div>
                <div>
                  <p>{data[i].price}</p>
                </div>
                <div className={style.itemBtn}>
                  <button className={"btn btn-success " + style.cartBtn}>
                    <span style={{ margin: "auto" }}>B Корзину</span>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </li>
      );
    }
    return liElements;
  };

  return generateProduct();
}

export default function ProductList({ data }) {
  return (
    <ul className={style.productList}>
      <Product number={12} data={data} />
    </ul>
  );
}
