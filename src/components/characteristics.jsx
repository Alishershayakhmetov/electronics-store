import style from "../css/characteristics.module.scss";

export default function Characteristics({ data }) {
  return (
    <div>
      <h3>Characteristics</h3>
      <div className={style.productTabs}>
        <div className={style.technicalSpecificationBlock}>
          {Object.keys(data).map((key) => (
            <div key={key} className={style.descriptionContainer}>
              <div className={style.descriptionKey}>{key}</div>
              <div style={{ width: "100%" }}>
                {Object.keys(data[key]).map((name) => (
                  <div key={name} className={style.descriptionItem}>
                    <div className={style.descriptionTitle}>
                      <p className={style.descriptionText}>{name}</p>
                    </div>
                    <div className={style.dots} />
                    <div className={style.descriptionRight}>
                      <p className={style.descriptionText}>{data[key][name]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button></button>
    </div>
  );
}
