import { useState, useRef, useEffect } from "react";
import style from "./choosegroup.module.scss";

export default function ChooseGroup({ title, data }) {
  const [toggled, setToggled] = useState(false);
  const [overflowed, setOverflowed] = useState(true);
  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);
  const action = ["Show All", "Toggle"];

  useEffect(() => {
    // Measure the height of the list container
    if (listRef.current) {
      setListHeight(listRef.current.clientHeight);
    }
  }, [data, overflowed, toggled]);

  let buttonListClasses = style.listBlock;

  if (!toggled) {
    buttonListClasses += " " + style.open;
  }
  if (!overflowed) {
    buttonListClasses += " " + style.expanded;
  }
  if (listHeight >= 150 && overflowed) {
    buttonListClasses += " " + style.gradient;
  }

  return (
    <div style={{ width: "100%" }}>
      <button
        onClick={() => {
          setToggled(!toggled);
          setOverflowed(true);
        }}
        className={style.toggler}
      >
        <div className={style.titleBlock}>
          <p className={style.title}>{title}</p>
        </div>
        <svg
          className={`${style.icon} ${style.rotateUp}`}
          fill="none"
          stroke="true"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M19.92 8L13.4 14.52C12.63 15.29 11.37 15.29 10.6 14.52L4.08002 8"
            stroke="#606971"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
      <div className={buttonListClasses} ref={listRef}>
        {data.map((e, i) => (
          <a key={i} className={style.linkOption} href={`/${title}/${e}`}>
            <label className={`${style.chip} ${style.chipM}`} htmlFor={e}>
              <input
                id={e}
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
      {listHeight >= 150 && !toggled && (
        <button
          className={style.showAllBtn}
          onClick={() => setOverflowed(!overflowed)}
        >
          <p className={style.showAllText}>{action[overflowed ? 0 : 1]}</p>
        </button>
      )}
    </div>
  );
}
