import { useState, useRef } from "react";
import "./ServerSelect.css";
import type { ScreenProps } from "../../router/types";

const DEMO_SERVER = "server_lukomorye_rt.ru";

type State = "idle" | "loading" | "error";

export default function ServerSelectScreen({ dispatch }: ScreenProps) {
  const [server, setServer] = useState("");
  const [state, setState] = useState<State>("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const filled = server.trim().length > 0;
  const isLoading = state === "loading";

  const handleConnect = () => {
    if (!filled || isLoading) return;
    setState("loading");
    setTimeout(() => {
      setState("idle");
      dispatch({ type: "replace", to: "login" });
    }, 1400);
  };

  const handleDemo = () => {
    dispatch({ type: "replace", to: "login" });
  };

  return (
    <div className="ss-root">
      {/* Logo */}
      <div className="ss-top">
        <img
          className="ss-logo"
          src={`${import.meta.env.BASE_URL}assets/logo-yaga.svg`}
          alt="Яга"
        />
        <h1 className="ss-title">Подключение сервера</h1>
        <p className="ss-subtitle">
          Адрес сервера для подключения<br />уточните у администратора
        </p>
      </div>

      {/* Input */}
      <div className="ss-form">
        <div className={`ss-input-wrap${state === "error" ? " ss-input-wrap--error" : ""}`}>
          <div className="ss-input-row">
            <div className="ss-input-inner" onClick={() => inputRef.current?.focus()}>
              <span className="ss-input-label">Адрес сервера</span>
              <input
                ref={inputRef}
                className="ss-input"
                type="text"
                placeholder="Введите адрес сервера"
                value={server}
                onChange={(e) => { setServer(e.target.value); setState("idle"); }}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
            </div>
            <div className="ss-input-actions">
              {filled && (
                <button
                  className="ss-clear-btn"
                  onClick={() => { setServer(""); setState("idle"); inputRef.current?.focus(); }}
                  aria-label="Очистить"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(133,143,163,.3)" />
                    <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              )}
              <button
                className="ss-qr-btn"
                aria-label="Сканировать QR"
                onClick={() => setServer(DEMO_SERVER)}
              >
                {/* QR-code icon inline SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="rgba(68,83,113,1)" strokeWidth="1.8"/>
                  <rect x="5" y="5" width="3" height="3" fill="rgba(68,83,113,1)"/>
                  <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="rgba(68,83,113,1)" strokeWidth="1.8"/>
                  <rect x="16" y="5" width="3" height="3" fill="rgba(68,83,113,1)"/>
                  <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="rgba(68,83,113,1)" strokeWidth="1.8"/>
                  <rect x="5" y="16" width="3" height="3" fill="rgba(68,83,113,1)"/>
                  <path d="M14 14h2v2h-2zM18 14h3M14 18h3M19 18h2v2M19 20h2" stroke="rgba(68,83,113,1)" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {state === "error" && (
          <p className="ss-error-text">
            Не удалось подключиться. Возможно неверно указан адрес сервера
          </p>
        )}

        <button
          className={`ss-btn${filled && !isLoading ? " ss-btn--active" : ""}`}
          onClick={handleConnect}
          disabled={!filled || isLoading}
        >
          {isLoading ? "Подключение к серверу ..." : "Подключиться"}
        </button>
      </div>

      {/* Footer */}
      <div className="ss-footer">
        <p className="ss-policy">
          Продолжая использовать приложение, вы соглашаетесь с{" "}
          <span className="ss-policy-link">Политикой конфиденциальности</span>
        </p>
        <button className="ss-demo-btn" onClick={handleDemo}>
          Демо-режим
        </button>
      </div>
    </div>
  );
}
