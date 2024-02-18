import phone from "../assets/phone.png";
import ad from "../assets/ad.png";
import fridge from "../assets/fridge.png";
import delivery from "../assets/delivery.png";
import warranty from "../assets/warranty.png";
import aboutUs from "../assets/aboutus.png";

import acer from "../assets/acer.png";
import xiaomi from "../assets/xiaomi.png";
import hp from "../assets/hp.png";
import huawei from "../assets/huawei.png";
import iphone from "../assets/apple_logo_black.svg";
import microsoft from "../assets/microsoft.png";

export default function Major() {
  return (
    <main style={{ backgroundColor: "#09D0EF" }}>
      <section className="container-block">
        <div className="ad-block">
          <img src={ad} className="ad" />
        </div>
        <section className="good-block">
          <p>product of the day</p>
          <div className="good-img-block">
            <img src={phone} className="good-img" />
          </div>
          <div className="description-block">
            <p className="description">
              Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793) Smartphone
            </p>
          </div>
          <h2>799 990 ₸</h2>
          <div className="center-button">
            <button className="good-button btn btn-success">Buy</button>
          </div>
        </section>
      </section>

      <div className="choose-product">
        <div className="button-set">
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Popular</span>
            </button>
          </div>
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Phones</span>
            </button>
          </div>
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Computers</span>
            </button>
          </div>
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Fridges</span>
            </button>
          </div>
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Vacuum cleaners</span>
            </button>
          </div>
          <div className="button-block">
            <button className="btn btn-outline-secondary category-button">
              <span className="button-text">Wash machines</span>
            </button>
          </div>
        </div>

        <div className="grid-product-block">
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className="clear-default-a">
            <div className="grid-item-block">
              <div className="img-block">
                <img src={fridge} className="product-img" />
              </div>
              <div className="description-block">
                <span className="description">
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className="price">359 990 ₸</h2>
              </div>
              <div className="center-button">
                <button className="good-button btn btn-success">
                  <span className="button-text">Buy</span>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="benefits">
        <div className="benefit-block">
          <div className="img-block">
            <img src={delivery} className="product-img" />
          </div>
          <div className="benefit-text-block">
            <span className="text">Fast delivery</span>
          </div>
        </div>

        <div className="benefit-block">
          <div className="img-block">
            <img src={warranty} className="product-img" />
          </div>
          <div className="benefit-text-block">
            <span className="text">Warranty from 12 Months</span>
          </div>
        </div>
        <div className="benefit-block">
          <div className="img-block">
            <img src={aboutUs} className="product-img" />
          </div>
          <div className="benefit-text-block">
            <span className="text">About us</span>
          </div>
        </div>
      </div>
      <div className="popular-brands">
        <div className="brand-text-block">
          <span className="brand-text">Popular Brands</span>
        </div>
        <div className="brands-block-list">
          <div className="brands-block">
            <img src={acer} className="brand-img" />
          </div>
          <div className="brands-block">
            <img src={xiaomi} className="brand-img" />
          </div>
          <div className="brands-block">
            <img src={hp} className="brand-img" />
          </div>
          <div className="brands-block">
            <img src={huawei} className="brand-img" />
          </div>
          <div className="brands-block">
            <img src={iphone} className="brand-img" />
          </div>
          <div className="brands-block">
            <img src={microsoft} className="brand-img" />
          </div>
        </div>
      </div>
    </main>
  );
}
