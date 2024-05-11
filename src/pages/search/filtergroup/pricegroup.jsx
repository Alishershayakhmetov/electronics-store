import { React, useState } from "react";
import Slider from "react-slider";

import style from "./pricegroup.module.scss";
import "./thumb.css";

export default function PriceGroup({ title, data }) {
  const MIN = data.min;
  const MAX = data.max;

  const pricePart = [
    Math.ceil((MIN + (MAX - MIN) / 3) / 1000) * 1000,
    Math.ceil((MAX - (MAX - MIN) / 3) / 1000) * 1000,
  ];

  const pricePartText = [
    `From ${pricePart[0]}`,
    `From ${pricePart[0]} To ${pricePart[1]}`,
    `To ${pricePart[1]}`,
  ];

  const [values, setValues] = useState([MIN, MAX]);

  const HandleBlur = () => {
    if (
      MIN > values[0] ||
      MAX < values[0] ||
      MIN > values[1] ||
      MAX < values[1]
    )
      setValues([MIN, MAX]);
  };

  return (
    <div style={{ width: "100%" }}>
      <p className={style.title} style={{ padding: "6px 1px" }}>
        {title}
      </p>
      <div className={`${style.listBlock} ${style.open} ${style.expanded}`}>
        <div className={style.inputsBlock}>
          <div className={`${style.wrapper} ${style.marginRight}`}>
            <input
              className={style.field}
              id="fromPrice"
              type="text"
              value={values[0]}
              onBlur={HandleBlur}
              onChange={(e) => {
                {
                  /*checks if the value is valid number */
                }
                if (/^\d+$/.test(e.target.value) || e.target.value === "") {
                  e.target.value === ""
                    ? setValues([0, MAX])
                    : e.target.value[0] === "0"
                    ? setValues([0, MAX])
                    : setValues([parseInt(e.target.value), MAX]);
                }
              }}
            />
            <label className={style.priceLabel} htmlFor="fromPrice">
              From
            </label>
          </div>
          <p className={style.marginRight}>-</p>
          <div className={`${style.wrapper} ${style.marginRight}`}>
            <input
              className={style.field}
              id="fromPrice"
              type="text"
              value={values[1]}
              onBlur={HandleBlur}
              onChange={(e) => {
                {
                  /*checks if the value is valid number */
                }
                if (/^\d+$/.test(e.target.value) || e.target.value === "") {
                  e.target.value === ""
                    ? setValues([MIN, 0])
                    : e.target.value[0] === "0"
                    ? setValues([MIN, 0])
                    : setValues([MIN, parseInt(e.target.value)]);
                }
              }}
            />
            <label className={style.priceLabel} htmlFor="fromPrice">
              To
            </label>
          </div>
        </div>
        <div style={{ width: "100%", padding: "10px 0" }}>
          <Slider
            className={style.slider}
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className={`${style.listBlock} ${style.open}`}>
            {pricePartText.map((e, i) => (
              <a key={i} className={style.linkOption}>
                <label className={`${style.chip} ${style.chipM}`}>
                  <input
                    type="checkbox"
                    style={{ height: "0", width: "0", display: "none" }}
                  />
                  <div className={style.chipBlock}>
                    <p className={style.chipTitle}>{e}</p>
                  </div>
                </label>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
