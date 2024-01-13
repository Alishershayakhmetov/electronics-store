import phone from '../assets/phone.png';
import ad from '../assets/ad.png';
import fridge from '../assets/fridge.png';

export default function Major() {
  return(
    <main>
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
            <p className="description" >Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793) Smartphone</p>
          </div>
          <h2>799 990 ₸</h2>
          <div className="center-button">
            <button className="good-button btn btn-success">
              Buy
            </button>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
                <img src={fridge} className="product-img"/>
              </div>
              <div className="description-block">
                <span className="description">Toshiba Fridge GR-RB449WE-PMJ(06)</span>
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
      
      <div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <div>
        <div>
          <p>

          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}