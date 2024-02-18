import logo from "/logo-crop-jpeg.jpg";
import rus from "../assets/ru.png";
import kaz from "../assets/kz.png";
import eng from "../assets/uk.webp";
import compare from "../assets/compare-icon.svg";
import favourite from "../assets/wishlist-icon.svg";
import basket from "../assets/cart-icon.svg";
import profile from "../assets/profile-icon.webp";

export default function Header() {
  let cityWindow = "city-window";

  function handleCityClick() {
    if (cityWindow === "city-window") {
    } else {
    }
  }

  return (
    <header className="header" style={{ backgroundColor: "#7DF9FF" }}>
      <section className="upper-header">
        <div className="left-div">
          <div style={{ marginLeft: "5px" }}>
            <button
              onClick={() => handleCityClick(cityWindow)}
              className="btn btn-primary"
            >
              City
            </button>
            <div className={cityWindow}>
              <ul>
                <li>Объект 1</li>
                <li>Объект 2</li>
                <li>Объект 3</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="btn btn-secondary">
              <a
                href="/addresses"
                style={{ textDecoration: "none", color: "white" }}
              >
                Addresses
              </a>
            </button>
          </div>
          <div>
            <button className="btn btn-dark">Theme</button>
          </div>
        </div>
        <div className="right-lang-div">
          <button className="lang-button btn btn-outline-secondary">
            <img src={rus} width="25" height="25" />
            <span>Rus</span>
          </button>
          <button className="lang-button btn btn-outline-secondary">
            <img src={kaz} width="25" height="25" />
            <span>Kaz</span>
          </button>
          <button className="lang-button btn btn-outline-primary">
            <img src={eng} width="25" height="25" />
            <span>Eng</span>
          </button>
        </div>
      </section>
      <section className="lower-header">
        <div className="left-lower-div">
          <div style={{ marginLeft: "5px" }}>
            <a href="#">
              <img className="logo" src={logo} />
            </a>
          </div>
          <div>
            <button className="btn btn-info">
              <img />
              Catalogue
            </button>
          </div>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <div className="wrapper">
            <a>
              <div className="icon-div">
                <img src={favourite} height={24} width={25}></img>
              </div>
              <span>Favourite</span>
            </a>
            <a>
              <div className="icon-div">
                <img src={compare} height={24} width={25}></img>
              </div>
              <span>Compare</span>
            </a>
            <a>
              <div className="icon-div">
                <img src={basket} height={24} width={25}></img>
              </div>
              <span>Cart</span>
            </a>
            <a>
              <div className="icon-div">
                <img src={profile} height={24} width={25}></img>
              </div>
              <span>Log In</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
