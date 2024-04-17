import { useState, useRef } from "react";
import style from "./characteristics.module.scss";
import useLanguage from "../../hooks/language/useLanguage";

export default function Characteristics({ data }) {
  const [collapsed, setCollapsed] = useState(true);
  const stretchButtonRef = useRef(null);
  const { t } = useLanguage();

  const handleStretchToggle = () => {
    setCollapsed(!collapsed);
    // If unstretching, scroll to the stretch button
    if (!collapsed && stretchButtonRef.current) {
      const { top } = stretchButtonRef.current.getBoundingClientRect();
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h3>Characteristics</h3>
      <div
        className={
          collapsed
            ? `${style.productTabs} ${style.collapsed}`
            : style.productTabs
        }
      >
        <div className={style.technicalSpecificationBlock}>
          {Object.keys(data).map((key) => (
            <div key={key} className={style.descriptionContainer}>
              <div className={style.descriptionKey}>{t(key)}</div>
              <div style={{ width: "100%" }}>
                {Object.keys(data[key]).map((name) => (
                  <div key={name} className={style.descriptionItem}>
                    <div className={style.descriptionTitle}>
                      <p className={style.descriptionText}>{t(name)}</p>
                    </div>
                    <div className={style.dots} />
                    <div className={style.descriptionRight}>
                      <p className={style.descriptionText}>
                        {t(data[key][name])}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {collapsed && (
        <div style={{ position: "relative" }}>
          <div className={style.shadowBottom}></div>
        </div>
      )}
      <button onClick={handleStretchToggle} ref={stretchButtonRef}>
        Stretch
      </button>
    </div>
  );
}
