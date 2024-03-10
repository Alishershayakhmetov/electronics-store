import style from "./auth.module.css";

import AuthWindow from "./authWindow";

export default function AuthPage() {
  return (
    <div className={style.background}>
      <div style={{ padding: "2em auto" }}>
        <div className={style.contentW3ls}>
          <AuthWindow></AuthWindow>
        </div>
      </div>
    </div>
  );
}