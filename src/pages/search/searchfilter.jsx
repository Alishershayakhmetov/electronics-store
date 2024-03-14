import ChooseGroup from "./filtergroup/choosegroup";
import style from "./searchfilter.module.css";

export default function SearchFilter() {
  const data = [
    [
      "brand",
      [
        "Apple",
        "Samsung",
        "Huawei",
        "Honor",
        "Redmi",
        "Tecno",
        "Vivo",
        "Xiaomi",
        "ZTE",
        "POCO",
        "OPPO",
      ],
    ],
    ["Series", ["MAc", "SmSAPG"]],
  ];

  return (
    <ul className={style.filterUl}>
      {data.map((e, i) => (
        <li key={i}>
          <ChooseGroup title={e[0]} data={e[1]} />
        </li>
      ))}
    </ul>
  );
}
