import ChooseGroup from "./filtergroup/choosegroup";
import PriceGroup from "./filtergroup/pricegroup";
import style from "./searchfilter.module.css";

export default function SearchFilter() {
  const MIN = 29000;
  const MAX = 404990;
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
      <li>
        <PriceGroup title={"Price"} data={{ min: MIN, max: MAX }} />
      </li>
      {data.map((e, i) => (
        <li key={i}>
          <ChooseGroup title={e[0]} data={e[1]} />
        </li>
      ))}
    </ul>
  );
}
