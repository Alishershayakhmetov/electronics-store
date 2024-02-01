export default function AuthWindow() {
  return (
    <div className="auth-window">
      <div className="auth-bottom">
        <div className="tabs">
          <div className="tabs-items">
            <div className="selected-tab tabs-item label-large spacer pointer">
              Log In
            </div>
            <div className="tabs-item label-large spacer pointer">Register</div>
          </div>
          <div className="line" style={{ width: "50%", left: "0%" }}></div>
        </div>
      </div>
      <section>
        <form className="login-fields">
          <div>
            <div className="field">
              <label htmlFor="email-field" className="body-small grey-text">
                "Number phone *"
              </label>
              <input
                name="email-field"
                capturelassname="body-medium"
                style={{ height: "40px" }}
                type="text"
                placeholder="Enter your number"
              ></input>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="password-field" className="body-small grey-text">
                "Password *"
              </label>
              <input
                name="password-field"
                capturelassname="body-medium"
                style={{ height: "40px" }}
                type="text"
                placeholder="Enter your number"
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
            >
              <span>Log In</span>
            </button>
          </div>
        </form>
      </section>
      <div></div>
    </div>
  );
}
