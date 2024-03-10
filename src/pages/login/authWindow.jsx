import React, { useState } from "react";
import axios from "axios";
import style from "./authWindow.module.css";

export default function AuthWindow() {
  const [logIn, setLogIn] = useState(true);
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/data", formData);

      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  {
    /* "tabs-item label-large spacer pointer" */
  }

  return (
    <div className={style.authWindow}>
      <div className={style.authBottom}>
        <div className={style.tabs}>
          <div className={style.tabsItems}>
            <div
              className={
                logIn
                  ? style.selectedTab +
                    " " +
                    style.tabsItem +
                    " " +
                    style.labelLarge +
                    " " +
                    style.spacer +
                    " " +
                    style.pointer
                  : style.tabsItem +
                    " " +
                    style.labelLarge +
                    " " +
                    style.spacer +
                    " " +
                    style.pointer
              }
              onClick={(e) => {
                e.preventDefault;
                setLogIn(true);
              }}
            >
              Log In
            </div>
            <div
              className={
                logIn
                  ? style.tabsItem +
                    " " +
                    style.labelLarge +
                    " " +
                    style.spacer +
                    " " +
                    style.pointer
                  : style.selectedTab +
                    " " +
                    style.tabsItem +
                    " " +
                    style.labelLarge +
                    " " +
                    style.spacer +
                    " " +
                    style.pointer
              }
              onClick={(e) => {
                e.preventDefault;
                setLogIn(false);
              }}
            >
              Register
            </div>
          </div>
          <div
            className={style.line}
            style={{ width: "50%", left: "0%" }}
          ></div>
        </div>
      </div>
      <section>
        <form className={style.loginFields} onSubmit={handleSubmit}>
          <div>
            <div className={style.field}>
              <label
                htmlFor="name"
                className={style.bodySmall + " " + style.greyText}
              >
                "Username *"
              </label>
              <input
                name="name"
                capturelassname="body-medium"
                style={{ height: "40px" }}
                type="text"
                placeholder="Enter your number"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div>
            <div className={style.field}>
              <label
                htmlFor="password"
                className={style.bodySmall + " " + style.greyText}
              >
                "Password *"
              </label>
              <input
                name="password"
                capturelassname="body-medium"
                style={{ height: "40px" }}
                type="text"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className={style.loginForgot}>
            <div
              className={
                style.blueText + " " + style.bodyMedium + " " + style.pointer
              }
            >
              Forgot password?
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
        {responseMessage && <div>{responseMessage}</div>}
      </section>
      <div></div>
    </div>
  );
}
