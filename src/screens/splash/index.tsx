import type { ScreenProps } from "../../router/types";

export default function SplashScreen(_: ScreenProps) {
  return (
    <div style={s.root}>
      <div style={s.lockup}>
        <img src={`${import.meta.env.BASE_URL}assets/logo-yaga.svg`} alt="" style={s.icon} />
        <span style={s.wordmark}>Яга</span>
      </div>
      <span style={s.subtitle}>Система управления проектами</span>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    width: "100%", height: "100%",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", gap: 12,
    background: "rgba(255,255,255,1)",
    fontFamily: "var(--font-family)",
  },
  lockup: { display: "flex", alignItems: "center", gap: 12 },
  icon: { width: 48, height: 48 },
  wordmark: {
    fontSize: 36, fontWeight: 700, letterSpacing: "-0.5px",
    color: "rgba(14,17,23,1)",
  },
  subtitle: {
    fontSize: 15, fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(133,143,163,1)",
  },
};
