import style from "./citymodal.module.scss";

export default function CityModal({ open, onClose }) {
  if (!open) return null;

  const cities = ["Astana", "Almaty", "Shymkent"];
  const towns = [
    "Karaganda",
    "Aktobe",
    "Taraz",
    "Pavlodar",
    "Ust-Kamenogorsk",
    "Semey",
    "Kostanay",
    "Petropavl",
    "Atyrau",
    "Aktau",
    "Kokshetau",
    "Taldykorgan",
    "Oral (Uralsk)",
    "Kyzylorda",
    "Temirtau",
    "Ekibastuz",
    "Rudny",
    "Zhanaozen",
    "Turkestan",
    "Shchuchinsk",
    "Zhezkazgan",
    "Ayagoz",
    "Zhezqazghan",
    "Lisakovsk",
    "Kentau",
    "Stepnogorsk",
    "Ridder (Leninogorsk)",
    "Saryagash",
    "Ridder",
    "Saran",
    "Shu",
    "Zharkent",
    "Zhosaly",
    "Zhangaözen",
    "Aksu",
    "Boralday",
    "Esik",
    "Georgiyevka",
    "Kapshagay",
    "Karatau",
    "Shardara",
    "Shalkar",
    "Tekeli",
    "Ushtobe",
    "Arys",
    "Zhanaarka",
    "Atbasar",
  ];
  return (
    <div
      onClick={() => {
        onClose();
        document.body.style.overflow = "auto"; // Restore scrolling
      }}
      className={style.overlay}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.modalContainer}
      >
        <button
          className={
            style.closeBtn +
            " " +
            style.closeBtnCross +
            " " +
            style.resetBtnStyles
          }
          onClick={() => {
            onClose();
            document.body.style.overflow = "auto"; // Restore scrolling
          }}
        >
          <svg
            fill="none"
            stroke="true"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            style={{ verticalAlign: "baseline" }}
          >
            <path
              clipRule="evenodd"
              d="M12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            ></path>
            <path
              clipRule="evenodd"
              d="M3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L11.6464 12.3536C11.8417 12.5488 12.1583 12.5488 12.3536 12.3536C12.5488 12.1583 12.5488 11.8417 12.3536 11.6464L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <p>Select your City</p>
        <p>
          choosing your city will let you know about presence products and
          delivery requests
        </p>
        <div className={style.inputContainer}>
          <div>
            <svg
              fill="none"
              stroke="true"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                clipRule="evenodd"
                d="M2.5 11.25C2.5 6.41751 6.41751 2.5 11.25 2.5C16.0825 2.5 20 6.41751 20 11.25C20 16.0825 16.0825 20 11.25 20C6.41751 20 2.5 16.0825 2.5 11.25ZM11.25 1C5.58908 1 1 5.58908 1 11.25C1 16.9109 5.58908 21.5 11.25 21.5C16.9109 21.5 21.5 16.9109 21.5 11.25C21.5 5.58908 16.9109 1 11.25 1ZM20.2803 19.2197C19.9874 18.9268 19.5126 18.9268 19.2197 19.2197C18.9268 19.5126 18.9268 19.9874 19.2197 20.2803L21.2197 22.2803C21.5126 22.5732 21.9874 22.5732 22.2803 22.2803C22.5732 21.9874 22.5732 21.5126 22.2803 21.2197L20.2803 19.2197Z"
                fill="#8E979F"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <input placeholder="Find your city" className={style.cityInput} />
        </div>
        <div className={style.modalList}>
          <div
            className={style.listBlock + " " + style.cityList}
            style={{ gridTemplateRows: "repeat(2, 24px)", maxHeight: "100%" }}
          >
            {/* div for cities */}

            {cities.map((e, i) => (
              <div className={style.cityListItem} key={i}>
                <p
                  className={
                    style.cityListItemName +
                    " " +
                    style.typography +
                    " " +
                    style.bold
                  }
                >
                  {e}
                </p>
              </div>
            ))}
          </div>
          <div
            className={style.listBlock + " " + style.cityList}
            style={{ gridTemplateRows: "repeat(24, 24px)", maxHeight: "100%" }}
          >
            {/* div for towns */}

            {towns.map((e, i) => (
              <div className={style.cityListItem} key={i}>
                <p className={style.cityListItemName + " " + style.typography}>
                  {e}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
