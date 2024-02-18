import style from "../css/searchfilter.module.css";

export default function SearchFilter() {
  return (
    <div className={style.filterDiv}>
      <ul className={style.filterUl}>
        <li>red</li>
        <li>blue</li>
        <li>blue</li>
        <li>blue</li>
        <li>blue</li>
      </ul>
    </div>
  );
}
