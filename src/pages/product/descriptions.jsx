import useLanguage from "../../hooks/language/useLanguage";
import style from "./description.module.scss";

export default function Description({ description }) {
  const { t } = useLanguage();
  return (
    <div style={{ flex: "1", marginLeft: "12px" }}>
      <p className={style.descriptionHeader}>Description:</p>
      <div className={style.descriptionInfo}>
        {Object.keys(description).map((key) => (
          <div key={key} className={style.descriptionItem}>
            <span style={{ whiteSpace: "nowrap" }}>{t(key)}</span>
            <div className={style.dotDiv}></div>
            <span style={{ whiteSpace: "nowrap" }}>{t(description[key])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
