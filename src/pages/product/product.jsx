import React, { useEffect, useState } from "react";
import ImageCarousel from "./carousel";
import style from "./product.module.css";
import PathMaker from "../../components/pathmaker/pathMaker";
import Description from "./descriptions";
import Characteristics from "./characteristics";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useLanguage from "../../hooks/language/useLanguage";
import { useGetProductQuery } from "../../store/apiSlice";

export default function Product() {
  const urlpath = useLocation().pathname.slice(9);
  let path = [];
  let lang = localStorage.getItem("preferredLanguage");
  lang = lang.charAt(0).toUpperCase() + lang.slice(1);
  const { t } = useLanguage();

  // const [product, setProduct] = useState(undefined);
  const {
    data: productData,
    error,
    isError,
    isLoading,
  } = useGetProductQuery({ urlpath, lang });
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8003/api/catalog/api/product/${urlpath}/${lang}`
        );
        path = ["main", response.data.category];
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);
  */
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <>
        <div>Error: {error.error}</div>
        <div>{error.status}</div>
        <div>Error fetching product data. Please try again later.</div>
      </>
    );
  }

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
                {t(productData[`name${lang}`])}
              </h2>
            </div>
            <div className={style.productInfo}>
              <ImageCarousel images={productData.imageURLs} />
              <Description description={productData.description} />
            </div>
          </div>
          <div className={style.productBlock}>
            <Characteristics data={productData.characteristics} />
          </div>
        </div>
        <div className={style.priceBlock}>
          {" "}
          {/*price div */}
          <div>
            <p>ID: 1234567890</p>
          </div>
          <div>
            <p>{productData.price}</p>
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
