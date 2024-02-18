import React, { useState } from "react";
import axios from "axios";

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
    <div className="auth-window">
      <div className="auth-bottom">
        <div className="tabs">
          <div className="tabs-items">
            <div
              className={
                logIn
                  ? "selected-tab tabs-item label-large spacer pointer"
                  : "tabs-item label-large spacer pointer"
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
                  ? "tabs-item label-large spacer pointer"
                  : "selected-tab tabs-item label-large spacer pointer"
              }
              onClick={(e) => {
                e.preventDefault;
                setLogIn(false);
              }}
            >
              Register
            </div>
          </div>
          <div className="line" style={{ width: "50%", left: "0%" }}></div>
        </div>
      </div>
      <section>
        <form className="login-fields" onSubmit={handleSubmit}>
          <div>
            <div className="field">
              <label htmlFor="name" className="body-small grey-text">
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
            <div className="field">
              <label htmlFor="password" className="body-small grey-text">
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
          <div className="login-forgot">
            <div className="blue-text body-medium pointer">
              Forgot password?
            </div>
          </div>
          <div>
            <button
              className="filled label-large"
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
