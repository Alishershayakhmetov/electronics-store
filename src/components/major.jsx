import phone from '../assets/phone.png';
import ad from '../assets/ad.png';

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

      <section>
        <div>

        </div>
        <div>

        </div>
      </section>
      
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