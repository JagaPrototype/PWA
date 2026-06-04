import { useState } from "react";
import { useRouter } from "../router/AppRouter";
import "./LoginScreen.css";

export default function LoginScreen() {
  const { navigate } = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginFocused, setLoginFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-status-bar">19:39</div>

      <div className="login-content">
        <img className="login-logo" src="/assets/logo-yaga.svg" alt="Yaga" width="64" height="64" />

        <h1 className="login-title">Добро пожаловать</h1>

        <div className="login-fields">
          <div className={`login-field ${loginFocused ? "focused" : ""}`}>
            <label className="login-field-label">Логин</label>
            <input
              type="text"
              className="login-field-input"
              placeholder="Введите логин"
              value={login}
              onChange={e => setLogin(e.target.value)}
              onFocus={() => setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
              autoComplete="username"
            />
          </div>

          <div className={`login-field ${passwordFocused ? "focused" : ""}`}>
            <label className="login-field-label">Пароль</label>
            <input
              type="password"
              className="login-field-input"
              placeholder="Введите пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              autoComplete="current-password"
            />
          </div>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("home")}
        >
          Войти
        </button>
      </div>
    </div>
  );
}
