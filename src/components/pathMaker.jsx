import style from "../css/pathMaker.module.scss";

export default function PathMaker({ path }) {
  const arrow = (
    <svg
      style={{ margin: "0 2px", width: "16px", height: "16px" }}
      fill="none"
      stroke="true"
      viewBox="0 0 24 24 "
    >
      <path
        d="M8 19.84L14.52 13.32C15.29 12.55 15.29 11.29 14.52 10.52L8 4"
        stroke="#606971"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
    </svg>
  );

  return (
    <ul className={style.path}>
      {/*storing product path in the website */}
      {path.map((e, i) => (
        <li key={i}>
          <a>{e}</a>
          {i + 1 !== path.length && arrow}
        </li>
      ))}
    </ul>
  );
}
