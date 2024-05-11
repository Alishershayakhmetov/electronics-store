import { Button, Checkbox, FormGroup } from "@mui/material";
import React, { useState, useEffect } from "react";
import Block from "../../components/block";
import style from "./basket.module.css";
import { useGetAllProductsQuery } from "../../store/slices/cartSlice";
import { getPersonLanguage } from "../../utils/getPersonLang";
import useLanguage from "../../hooks/language/useLanguage";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

export default function Basket() {
  const { t } = useLanguage();
  const lang = getPersonLanguage();
  const { data, error, isError, isLoading } = useGetAllProductsQuery(lang);
  const [selectedList, setSelectedList] = useState({});
  const [selectedListLoading, setSelectedListLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setSelectedList(getSelectedList(data));
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(selectedList).length > 0) {
      setSelectedListLoading(false);
    }
  }, [selectedList]);

  const handleCheckAllChange = async () => {
    const areAllChecked = Object.values(selectedList).every(
      (value) => value === true
    );
    const updatedList = {};
    for (const key in selectedList) {
      updatedList[key] = !areAllChecked;

      await axios
        .create({ withCredentials: true })
        .post(
          `http://localhost:8003/api/catalog/api/cart/changeSelected?productId=${key}&value=${!areAllChecked}`
        );
    }
    setSelectedList(updatedList);
  };

  if (isLoading || selectedListLoading) {
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
    <Block style={{ backgroundColor: "#f0f1f2" }}>
      <main
        style={{
          maxWidth: "1232px",
          margin: "0 auto",
        }}
      >
        <h1>{t("Basket")}</h1>
        <div className={style.container}>
          <div className={style.productList}>
            <div className={style.productListHeader}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Object.values(selectedList).every(
                        (value) => value === true
                      )}
                      onChange={handleCheckAllChange}
                    />
                  }
                  label="Check All"
                />
              </FormGroup>
              <Button
                onClick={() => {
                  if (
                    Object.values(selectedList).filter((item) => item)
                      .length !== 0
                  ) {
                    axios
                      .create({ withCredentials: true })
                      .post(
                        `http://localhost:8003/api/catalog/api/cart/deleteSelectedList`,
                        selectedList
                      )
                      .then((response) => setSelectedList(response.data));
                  }
                }}
              >
                Delete(
                {Object.values(selectedList).filter((item) => item).length})
              </Button>
            </div>
            <div className={style.productListBody}>
              {data.map((product, index) => (
                <Product
                  key={index}
                  product={product}
                  selectedList={selectedList}
                  setSelectedList={setSelectedList}
                />
              ))}
            </div>
          </div>
          <div className={style.priceBox}>
            <Block>
              <div className={style.priceShelf}>
                <span>Price: </span>
                <span>249 000T</span>
              </div>
              <div className={style.priceShelf}>
                <span>2 products</span>
              </div>
              <Button style={{ border: "1px solid #33383D" }}>Buy</Button>
            </Block>
          </div>
        </div>
      </main>
    </Block>
  );
}

function Product({ product, selectedList, setSelectedList }) {
  if (Object.keys(selectedList).length === 0) {
    return null;
  } else {
    const [value, setValue] = useState(product.amount);
    const [buttonState, setButtonState] = useState(0);
    const [buttonStatePlus, setButtonStatePlus] = useState(0);
    const buttonColor = ["transparent", "#0288d1", "#0d3b85"];
    const svgColor = ["#33383D", "#0288d1", "White"];

    const handleChange = (e) => {
      if (/^\d+$/.test(e.target.value) || e.target.value === "") {
        setValue(
          e.target.value === ""
            ? 0
            : e.target.value === "0"
            ? 0
            : parseInt(e.target.value)
        );
      }
      if (parseInt(e.target.value) > 99) {
        setValue(e.target.value.slice(0, 2));
      }
    };

    const handleBlur = () => {
      let result = parseInt(value);
      if (result === 0 || result < 1 || result > 99) {
        setValue(1);
      }
    };

    return (
      <div className={style.productContainer}>
        <div>
          <Checkbox
            checked={selectedList[product.productId]}
            onChange={() => {
              setSelectedList({
                ...selectedList,
                [product.productId]: !selectedList[product.productId],
              });
              axios
                .create({ withCredentials: true })
                .post(
                  `http://localhost:8003/api/catalog/api/cart/changeSelected?productId=${
                    product.productId
                  }&value=${!selectedList[product.productId]}`
                );
            }}
          />
          <img
            src={product.image}
            width={76}
            height={76}
            style={{ marginRight: "8px" }}
          />
        </div>

        <div>
          <p
            style={{
              marginBottom: "0",
              maxWidth: "500px",
              overflowWrap: "break-word",
            }}
          >
            <span>{product.name}</span>
          </p>
          <p style={{ marginBottom: "0" }}>
            <span>
              <strong>{product.price}₸</strong>
            </span>
          </p>
          <span>
            <small>159 990₸ x 2</small>
          </span>
        </div>
        <div className={style.countBox}>
          <button
            className={style.svgButton}
            style={{
              marginRight: "4px",
              border: `1px solid ${buttonColor[buttonState]}`,
            }}
            onClick={() =>
              value === 1 ? setValue(value) : setValue(value - 1)
            }
            onMouseEnter={() => setButtonState(1)}
            onMouseLeave={() => setButtonState(0)}
            onMouseDown={() => setButtonState(2)}
            onMouseUp={() => setButtonState(0)}
          >
            {value === 1 ? (
              <svg
                fill="none"
                stroke=""
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  clipRule="evenodd"
                  d="M9.20966 3.53441L9.20964 3.53456L9.04687 4.5038C9.60792 4.48794 10.169 4.48001 10.7301 4.48001C11.9728 4.48001 13.2168 4.50337 14.4605 4.54957L14.2906 3.54514L14.2898 3.54069L14.2898 3.54069C14.2062 3.02767 14.1533 2.84352 14.0561 2.73155C14.0023 2.6696 13.8149 2.5 13.0601 2.5H10.4401C9.67396 2.5 9.49226 2.66488 9.44382 2.71981C9.3517 2.82427 9.29978 2.99942 9.2097 3.53421L9.20966 3.53441ZM7.73041 3.28579L7.51528 4.56678C6.58207 4.61715 5.6489 4.68946 4.71578 4.7837L2.67688 4.98359C2.26464 5.024 1.96322 5.39095 2.00363 5.80319C2.04405 6.21543 2.411 6.51685 2.82323 6.47643L4.86323 6.27643L4.86543 6.27621C6.82051 6.07873 8.77535 5.98001 10.7301 5.98001C14.0447 5.98001 17.37 6.14872 20.6761 6.47636C21.0883 6.5172 21.4555 6.21617 21.4964 5.80397C21.5372 5.39178 21.2362 5.02452 20.824 4.98367C19.2174 4.82445 17.606 4.7022 15.9931 4.61803C15.992 4.61032 15.9908 4.60259 15.9895 4.59486L15.7699 3.29711L15.7605 3.23891C15.6948 2.83006 15.5963 2.21776 15.189 1.74845C14.7178 1.2054 13.9952 1 13.0601 1H10.4401C9.51615 1 8.79285 1.19012 8.31879 1.72769C7.91209 2.18887 7.81108 2.79899 7.74222 3.21487L7.73047 3.28544L7.73041 3.28579ZM19.3484 8.93833C19.3751 8.52497 19.0616 8.16825 18.6483 8.14157C18.2349 8.11489 17.8782 8.42835 17.8515 8.8417L17.2018 18.9076L17.2016 18.9096C17.1734 19.3124 17.1495 19.6318 17.0935 19.9102C17.0389 20.1814 16.9631 20.3595 16.8652 20.4869C16.6963 20.7067 16.2794 21 14.96 21H8.53996C7.22052 21 6.80358 20.7067 6.63476 20.4869C6.53686 20.3595 6.46105 20.1814 6.40644 19.9102C6.35038 19.6318 6.32649 19.3124 6.29827 18.9096L6.29812 18.9076L5.6484 8.8417C5.62172 8.42835 5.265 8.11489 4.85165 8.14157C4.43829 8.16825 4.12483 8.52497 4.15151 8.93833L4.8015 19.0083L4.80179 19.0124L4.80312 19.0314C4.82947 19.4077 4.85844 19.8214 4.93597 20.2064C5.01636 20.6055 5.15805 21.0268 5.44516 21.4006C6.04633 22.1833 7.06939 22.5 8.53996 22.5H14.96C16.4305 22.5 17.4536 22.1833 18.0548 21.4006C18.3419 21.0268 18.4836 20.6055 18.5639 20.2064C18.6415 19.8214 18.6704 19.4077 18.6968 19.0314L18.6981 19.0124L18.6984 19.0083L19.3484 8.93833Z"
                  fill={svgColor[buttonState]}
                  fillRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke=""
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M6 12H18"
                  stroke={svgColor[buttonState]}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            )}
          </button>
          <div className={style.inputBox}>
            <input
              className={style.amountInput}
              id="QtySelector"
              type="text"
              required
              title="number from 1 to 99"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              min={0}
              max={99}
            />
            <label className="FieldNext__Label" htmlFor="QtySelector"></label>
          </div>
          <button
            className={style.svgButton}
            style={{
              marginLeft: "4px",
              border: `1px solid ${buttonColor[buttonStatePlus]}`,
            }}
            onClick={() => setValue(value === 99 ? 99 : value + 1)}
            onMouseEnter={() => setButtonStatePlus(1)}
            onMouseLeave={() => setButtonStatePlus(0)}
            onMouseDown={() => setButtonStatePlus(2)}
            onMouseUp={() => setButtonStatePlus(0)}
          >
            <svg
              fill="none"
              stroke=""
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                d="M6 12H18"
                stroke={svgColor[buttonStatePlus]}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M12 18V6"
                stroke={svgColor[buttonStatePlus]}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

function getSelectedList(data) {
  /*
  return data.reduce((result, product) => {
    result[product.productId] = product.selected;
    return result;
  }, {});
  */
  const result = {};
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    result[item.productId] = item.selected;
  }
  return result;
}
