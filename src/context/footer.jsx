import youtube from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#15A3C7" }}>
      <div className="upper-footer-block">
        {" "}
        {/* form div*/}
        <form className="email-form">
          <label htmlFor="email">get in touch with us:</label>
          <input type="email" id="email" name="email" />
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
        <section className="lists-block">
          {" "}
          {/*lists */}
          <div>
            <p>internet-shop</p>
            <ul>
              <li>Discounts</li>
              <li>News</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Work-In</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <p>Help</p>
            <ul>
              <li>How to order</li>
              <li>Payment</li>
              <li>Brands</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="social-media-list">
        <div className="social-media-block">
          <span>We are in social media</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className="social-media-img" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className="social-media-img" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className="social-media-img" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className="social-media-img" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className="social-media-img" />
            </a>
          </div>
        </div>
        <div>{/*hotline number*/}</div>
      </div>
      <div className="lower-footer-block">
        <span>&copy AO "Imart" 2002-2023</span>
        <div></div>
        <span>privacy policy</span>
      </div>
    </footer>
  );
}
