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

import style from "../css/major.module.css";

export default function Major() {
  return (
    <main style={{ backgroundColor: "#09D0EF" }}>
      <section className={style.containerBlock}>
        <div className={style.adBlock}>
          <img src={ad} className={style.ad} />
        </div>
        <section className={style.goodBlock}>
          <p>product of the day</p>
          <div className={style.goodImgBlock}>
            <img src={phone} className={style.goodImg} />
          </div>
          <div className={style.descriptionBlock}>
            <p className={style.description}>
              Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793) Smartphone
            </p>
          </div>
          <h2>799 990 ₸</h2>
          <div className={style.centerButton}>
            <button className={style.goodButton + " btn btn-success"}>
              Buy
            </button>
          </div>
        </section>
      </section>

      <div className={style.chooseProduct}>
        <div className={style.buttonSet}>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonText}>Popular</span>
            </button>
          </div>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonText}>Phones</span>
            </button>
          </div>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonText}>Computers</span>
            </button>
          </div>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonText}>Fridges</span>
            </button>
          </div>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonBlock}>Vacuum cleaners</span>
            </button>
          </div>
          <div className={style.buttonBlock}>
            <button
              className={"btn btn-outline-secondary " + style.categoryButton}
            >
              <span className={style.buttonText}>Wash machines</span>
            </button>
          </div>
        </div>

        <div className={style.gridProductBlock}>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
          <a href="/fridge" className={style.clearDefaultA}>
            <div className={style.gridItemBlock}>
              <div className={style.imgBlock}>
                <img src={fridge} className={style.productImg} />
              </div>
              <div className={style.descriptionBlock}>
                <span className={style.description}>
                  Toshiba Fridge GR-RB449WE-PMJ(06)
                </span>
                <h2 className={style.price}>359 990 ₸</h2>
              </div>
              <div className={style.centerButton}>
                <button className={style.goodButton + " btn btn-success"}>
                  <span className={style.buttonText}>Buy</span>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={style.benefits}>
        <div className={style.benefitBlock}>
          <div className={style.imgBlock}>
            <img src={delivery} className={style.productImg} />
          </div>
          <div className={style.benefitTextBlock}>
            <span className={style.text}>Fast delivery</span>
          </div>
        </div>

        <div className={style.benefitBlock}>
          <div className={style.imgBlock}>
            <img src={warranty} className={style.productImg} />
          </div>
          <div className={style.benefitTextBlock}>
            <span className={style.text}>Warranty from 12 Months</span>
          </div>
        </div>
        <div className={style.benefitBlock}>
          <div className={style.imgBlock}>
            <img src={aboutUs} className={style.productImg} />
          </div>
          <div className={style.benefitTextBlock}>
            <span className={style.text}>About us</span>
          </div>
        </div>
      </div>
      <div className={style.popularBrands}>
        <div className={style.brandTextBlock}>
          <span className={style.brnadText}>Popular Brands</span>
        </div>
        <div className={style.brandsBlockList}>
          <div className={style.brandsBlock}>
            <img src={acer} className={style.brandImg} />
          </div>
          <div className={style.brandsBlock}>
            <img src={xiaomi} className={style.brandImg} />
          </div>
          <div className={style.brandsBlock}>
            <img src={hp} className={style.brandImg} />
          </div>
          <div className={style.brandsBlock}>
            <img src={huawei} className={style.brandImg} />
          </div>
          <div className={style.brandsBlock}>
            <img src={iphone} className={style.brandImg} />
          </div>
          <div className={style.brandsBlock}>
            <img src={microsoft} className={style.brandImg} />
          </div>
        </div>
      </div>
    </main>
  );
}
