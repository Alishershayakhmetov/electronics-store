import { useState } from "react";
import style from "./authWindow.module.css";

export default function Confirm() {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCode(value);
    }
  };

  return (
    <div className={style.authWindow}>
      <section>
        <form className={style.loginFields}>
          <div>
            <div className={style.field}>
              <label
                htmlFor="code"
                className={style.bodySmall + " " + style.greyText}
              >
                Confirm code
              </label>
              <input
                name="code"
                capturelassname="body-medium"
                style={{ height: "40px" }}
                type="text"
                placeholder="Enter your code"
                value={code}
                onChange={(event) => handleChange(event)}
              ></input>
            </div>
          </div>
          <div className={style.loginForgot}>
            <div
              className={
                style.blueText + " " + style.bodyMedium + " " + style.pointer
              }
            >
              Didn't receive the code?
            </div>
          </div>
          <div>
            <button
              className={style.filled + " " + style.labelLarge}
              style={{
                background: "#00a153",
                width: "100%",
                borderRadius: "16px",
              }}
              type="submit"
            >
              <span>Log In</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
