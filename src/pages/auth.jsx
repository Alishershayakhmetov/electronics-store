import "../css/auth.css";

import AuthWindow from "../components/authWindow";
import "../css/authWindow.css";

export default function AuthPage() {
  return (
    <div className="background">
      <div style={{ padding: "2em auto" }}>
        <div className="content-w3ls">
          <AuthWindow></AuthWindow>
        </div>
      </div>
    </div>
  );
}
