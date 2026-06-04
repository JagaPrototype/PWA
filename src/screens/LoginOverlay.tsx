import { useState } from "react";
import { useRouter } from "../router/AppRouter";
import Frame_270_42225 from "../views/Frame_270_42225";

export default function LoginOverlay() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ position: "relative", width: "375px", height: "100dvh" }}>
      {/* Pixso-rendered background */}
      <Frame_270_42225 />

      {/* Native input overlays */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          position: "absolute",
          left: "20px", right: "20px",
          top: "340px",
          height: "48px",
          borderRadius: "12px",
          border: "1.5px solid var(--color-border-default, #a1a9b8)",
          padding: "0 16px",
          fontSize: "15px",
          fontFamily: "Inter, sans-serif",
          background: "var(--color-bg-surface1, #fffefe)",
          color: "var(--color-fg-default, #0e1117)",
          outline: "none",
          zIndex: 10,
        }}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{
          position: "absolute",
          left: "20px", right: "20px",
          top: "400px",
          height: "48px",
          borderRadius: "12px",
          border: "1.5px solid var(--color-border-default, #a1a9b8)",
          padding: "0 16px",
          fontSize: "15px",
          fontFamily: "Inter, sans-serif",
          background: "var(--color-bg-surface1, #fffefe)",
          color: "var(--color-fg-default, #0e1117)",
          outline: "none",
          zIndex: 10,
        }}
      />
      <button
        onClick={() => navigate("home")}
        style={{
          position: "absolute",
          left: "20px", right: "20px",
          top: "468px",
          height: "52px",
          borderRadius: "12px",
          border: "none",
          background: "var(--color-accent-default, #0055ff)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          cursor: "pointer",
          zIndex: 10,
          letterSpacing: "-0.3px",
        }}
      >
        Войти
      </button>
    </div>
  );
}
