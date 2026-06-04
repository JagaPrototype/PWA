import type { ScreenProps } from "../../router/types";

interface Props extends ScreenProps {
  label: string;
}

/**
 * Temporary screen shown until the real PNG-based screen is implemented.
 * Displays the screen name and a back button for navigation testing.
 */
export default function PlaceholderScreen({ label, dispatch, activeTab }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.badge}>{label}</div>
      <div style={styles.meta}>activeTab: {activeTab}</div>
      <button
        style={styles.back}
        onClick={() => dispatch({ type: "back" })}
      >
        ← назад
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    background: "#f1f3f9",
    fontFamily: "Inter, sans-serif",
  },
  badge: {
    padding: "12px 24px",
    background: "#0055ff",
    color: "#fff",
    borderRadius: 999,
    fontSize: 16,
    fontWeight: 600,
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
  back: {
    marginTop: 8,
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid #ccc",
    borderRadius: 12,
    fontSize: 14,
    cursor: "pointer",
  },
};
