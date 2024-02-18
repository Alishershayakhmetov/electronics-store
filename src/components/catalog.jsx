import qwerty from "../assets/Apple_iOS-update-iphone12pro.webp";

function CatalogItem({ number }) {
  const generateItem = () => {
    const catalogList = [];
    for (let i = 0; i < number; i++) {
      catalogList.push(
        <li key={i}>
          <button className="catalog-first-btn">
            <div className="catalog-first-img-layer">
              <img src={qwerty} className="catalog-first-img" />
            </div>
            <p className="catalog-first-p">Smartphones and Gandets</p>
          </button>
        </li>
      );
    }
    return catalogList;
  };
  return generateItem();
}

export default function Catalog() {
  return (
    <section>
      <div>
        <ul className="path">
          {" "}
          {/*storing product path in the website */}
          <li>
            <a>main</a>
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
          </li>
          <li>
            <a>stereo</a>
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
          </li>
          <li>
            <a>page</a>
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
          </li>
        </ul>
        <ul className="catalog-first">
          <CatalogItem number={24} />
        </ul>
        <ul></ul>
      </div>
    </section>
  );
}
