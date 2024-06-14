import React, { useState } from "react";
import axios from "axios";
import style from "./authWindow.module.css";
import Confirm from "./confirm";

export default function AuthWindow() {
  const [logIn, setLogIn] = useState(true);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
    userName: "",
    userSurname: "",
    email: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [view, setView] = useState("auth"); // State to track the current view
  const [logViaPhoneNumber, setLogViaPhoneNumber] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*
    try {
      const response = await axios.post("http://localhost:8080/data", formData);

      setResponseMessage(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
      setResponseMessage("An error occurred. Please try again.");
    }
    */
    if (!logIn) {
      try {
        const response = await axios.post(
          `http://localhost:8003/api/message-service/api/sms/send?phoneNumber=${formData.phoneNumber}`
        );
        console.log(response.data);
        setResponseMessage(response.data);
        setView("confirm");
      } catch (error) {
        console.error("Error:", error.response.data);
        setResponseMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phoneNumber") {
      // Validate phone number to allow only digits and an optional leading '+'
      if (/^\+?[0-9]*$/.test(value)) {
        setFormData({ ...formData, [name]: value, email: "" });
      }
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value, phoneNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const clearDictionaryValues = () => {
    // Create a new object with the same keys but empty values
    const clearedDictionary = {
      phoneNumber: "",
      password: "",
      userName: "",
      userSurname: "",
      email: "",
    };

    // Update the state with the cleared dictionary
    setFormData(clearedDictionary);
  };

  {
    /* "tabs-item label-large spacer pointer" */
  }

  if (view === "confirm") {
    return (
      <Background>
        <Confirm />
      </Background>
    );
  }

  return (
    <Background>
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
                  e.preventDefault();
                  setLogIn(true);
                  clearDictionaryValues();
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
                  e.preventDefault();
                  setLogIn(false);
                  clearDictionaryValues();
                }}
              >
                Register
              </div>
            </div>
            <div
              className={style.line}
              style={{ width: "50%", left: logIn ? "0%" : "50%" }}
            ></div>
          </div>
        </div>
        {logIn ? (
          <LogIn
            handleSubmit={handleSubmit}
            logViaPhoneNumber={logViaPhoneNumber}
            setLogViaPhoneNumber={setLogViaPhoneNumber}
            formData={formData}
            handleChange={handleChange}
            responseMessage={responseMessage}
          />
        ) : (
          <Register
            handleSubmit={handleSubmit}
            logViaPhoneNumber={logViaPhoneNumber}
            setLogViaPhoneNumber={setLogViaPhoneNumber}
            formData={formData}
            handleChange={handleChange}
            responseMessage={responseMessage}
          />
        )}
      </div>
    </Background>
  );
}

function Background({ children }) {
  return (
    <div className={style.background}>
      <div style={{ padding: "2em auto" }}>
        <div className={style.contentW3ls}>{children}</div>
      </div>
    </div>
  );
}

function Register({
  handleSubmit,
  logViaPhoneNumber,
  setLogViaPhoneNumber,
  formData,
  handleChange,
  responseMessage,
}) {
  return (
    <section>
      <form className={style.loginFields} onSubmit={handleSubmit}>
        <ChoosePhoneNumberOrEmail
          logViaPhoneNumber={logViaPhoneNumber}
          setLogViaPhoneNumber={setLogViaPhoneNumber}
        />
        {logViaPhoneNumber ? (
          <UserPhoneNumber formData={formData} handleChange={handleChange} />
        ) : (
          <UserEmail formData={formData} handleChange={handleChange} />
        )}
        <UserName formData={formData} handleChange={handleChange} />
        <UserSurname formData={formData} handleChange={handleChange} />

        <UserPassword formData={formData} handleChange={handleChange} />

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
              height: "28px",
            }}
            type="submit"
          >
            <span>Register</span>
          </button>
        </div>
      </form>
      {responseMessage && <div>{responseMessage}</div>}
    </section>
  );
}

function LogIn({
  handleSubmit,
  logViaPhoneNumber,
  setLogViaPhoneNumber,
  formData,
  handleChange,
  responseMessage,
}) {
  return (
    <section>
      <form className={style.loginFields} onSubmit={handleSubmit}>
        <ChoosePhoneNumberOrEmail
          logViaPhoneNumber={logViaPhoneNumber}
          setLogViaPhoneNumber={setLogViaPhoneNumber}
        />
        {logViaPhoneNumber ? (
          <UserPhoneNumber formData={formData} handleChange={handleChange} />
        ) : (
          <UserEmail formData={formData} handleChange={handleChange} />
        )}
        <UserPassword formData={formData} handleChange={handleChange} />

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
              height: "28px",
            }}
            type="submit"
          >
            <span>Log In</span>
          </button>
        </div>
      </form>
      {responseMessage && <div>{responseMessage}</div>}
    </section>
  );
}

function UserPhoneNumber({ formData, handleChange }) {
  return (
    <div>
      <div className={style.field}>
        <label
          htmlFor="phoneNumber"
          className={style.bodySmall + " " + style.greyText}
        >
          Phone Number *
        </label>
        <input
          name="phoneNumber"
          capturelassname="body-medium"
          style={{ height: "40px" }}
          type="text"
          placeholder="Enter your Phone Number"
          value={formData.phoneNumber}
          onChange={(event) => handleChange(event)}
        ></input>
      </div>
    </div>
  );
}

function UserName({ formData, handleChange }) {
  return (
    <div>
      <div className={style.field}>
        <label
          htmlFor="userName"
          className={style.bodySmall + " " + style.greyText}
        >
          Name *
        </label>
        <input
          name="userName"
          capturelassname="body-medium"
          style={{ height: "40px" }}
          type="text"
          placeholder="Enter your Name"
          value={formData.userName}
          onChange={(event) => handleChange(event)}
        ></input>
      </div>
    </div>
  );
}

function UserSurname({ formData, handleChange }) {
  return (
    <div>
      <div className={style.field}>
        <label
          htmlFor="userSurname"
          className={style.bodySmall + " " + style.greyText}
        >
          Surname *
        </label>
        <input
          name="userSurname"
          capturelassname="body-medium"
          style={{ height: "40px" }}
          type="text"
          placeholder="Enter your Surname"
          value={formData.userSurname}
          onChange={(event) => handleChange(event)}
        ></input>
      </div>
    </div>
  );
}

function UserPassword({ formData, handleChange }) {
  return (
    <div>
      <div className={style.field}>
        <label
          htmlFor="password"
          className={style.bodySmall + " " + style.greyText}
        >
          Password *
        </label>
        <input
          name="password"
          capturelassname="body-medium"
          style={{ height: "40px" }}
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(event) => handleChange(event)}
          autoComplete="qwerty"
        ></input>
      </div>
    </div>
  );
}

function UserEmail({ formData, handleChange }) {
  return (
    <div>
      <div className={style.field}>
        <label
          htmlFor="email"
          className={style.bodySmall + " " + style.greyText}
        >
          E-mail *
        </label>
        <input
          name="email"
          capturelassname="body-medium"
          style={{ height: "40px" }}
          type="text"
          placeholder="Enter your E-mail"
          value={formData.email}
          onChange={(event) => handleChange(event)}
        ></input>
      </div>
    </div>
  );
}

function ChoosePhoneNumberOrEmail({ logViaPhoneNumber, setLogViaPhoneNumber }) {
  return (
    <div>
      <div
        className={style.field}
        style={{ height: "auto", marginBottom: "10px" }}
      >
        <span className={style.greyText + " " + style.bodySmall}>
          Sign In via *
        </span>
        <div className={style.buttonChooseDiv}>
          <button
            className={
              logViaPhoneNumber
                ? style.buttonChoose +
                  " " +
                  style.labelLarge +
                  " " +
                  style.buttonActive
                : style.buttonChoose + " " + style.labelLarge
            }
            style={{
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
            onClick={(e) => {
              e.preventDefault();
              setLogViaPhoneNumber(true);
            }}
          >
            Phone number
          </button>
          <button
            className={
              !logViaPhoneNumber
                ? style.buttonChoose +
                  " " +
                  style.labelLarge +
                  " " +
                  style.buttonActive
                : style.buttonChoose + " " + style.labelLarge
            }
            style={{
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
            onClick={(e) => {
              e.preventDefault();
              setLogViaPhoneNumber(false);
            }}
          >
            E-mail
          </button>
        </div>
      </div>
    </div>
  );
}
