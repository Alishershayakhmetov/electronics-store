import youtube from "../assets/youtube.png";
import style from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", paddingTop: "20px" }}>
      <div className={style.upperFooterBlock}>
        {" "}
        {/* form div*/}
        <form className={style.emailForm}>
          <label htmlFor="email">get in touch with us:</label>
          <input type="email" id="email" name="email" />
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>
        <section className={style.listsBlock}>
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
      <div className={style.socialMediaList}>
        <div className={style.socialMediaBlock}>
          <span>We are in social media</span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className={style.socialMediaImg} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className={style.socialMediaImg} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className={style.socialMediaImg} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className={style.socialMediaImg} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} className={style.socialMediaImg} />
            </a>
          </div>
        </div>
        <div>{/*hotline number*/}</div>
      </div>
      <div className={style.lowerFooterBlock}>
        <span>&copy AO "Imart" 2002-2023</span>
        <div></div>
        <span>privacy policy</span>
      </div>
    </footer>
  );
}
