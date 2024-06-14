import { useState } from "react";
import style from "../style.module.scss";
import logo from "/logo-crop-jpeg.jpg";

export default function Overview() {
  const [hover, setHover] = useState(false);
  return (
    <div className={style.Overview}>
      <div className={style.upperInfoBox}>
        <div>
          <p>
            <span>
              <strong>Name Surname</strong>
            </span>
          </p>
          <p>
            <span className={style.spanDiv}>Phone number</span>
            <span>+7 700 555 35 35</span>
          </p>
          <p>
            <span className={style.spanDiv}>Email</span>
            <span>qwertyqwertySQL228@gmail.com</span>
          </p>
        </div>
        <div
          style={{ position: "relative", borderRadius: "50%" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={hover ? style.shadowWrapperHover : style.shadowWrapper}
          >
            <img className={style.personAvatar} src={logo} />
          </div>
          <svg
            className={hover ? style.svgChangePhoto : style.unable}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M281.6 137.813333a128 128 0 0 0-128 128v469.333334a128 128 0 0 0 128 128h213.333333a42.666667 42.666667 0 1 0 0-85.333334h-213.333333a42.666667 42.666667 0 0 1-42.666667-42.666666v-469.333334a42.666667 42.666667 0 0 1 42.666667-42.666666h469.333333a42.666667 42.666667 0 0 1 42.666667 42.666666v213.333334a42.666667 42.666667 0 1 0 85.333333 0v-213.333334a128 128 0 0 0-128-128h-469.333333z m294.613333 380.544l42.154667 365.184a21.333333 21.333333 0 0 0 38.357333 10.24l80.213334-108.629333 114.048 169.941333a42.666667 42.666667 0 1 0 70.826666-47.573333l-114.048-169.941333 124.416-36.693334a21.333333 21.333333 0 0 0 3.498667-39.552l-328.746667-164.522666a21.333333 21.333333 0 0 0-30.72 21.546666z" />
          </svg>
        </div>
      </div>
      <div className={style.bodyContainer}>
        <span>Settings: </span>
      </div>
    </div>
  );
}
