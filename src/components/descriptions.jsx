import style from "../css/description.module.scss";

export default function Description({ description }) {
  return (
    <div style={{ flex: "1", marginLeft: "12px" }}>
      <p className={style.descriptionHeader}>Description:</p>
      <div className={style.descriptionInfo}>
        {Object.keys(description).map((key) => (
          <div key={key} className={style.descriptionItem}>
            <span style={{ whiteSpace: "nowrap" }}>{key}</span>
            <div className={style.dotDiv}></div>
            <span style={{ whiteSpace: "nowrap" }}>{description[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
