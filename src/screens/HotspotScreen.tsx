import type { NavAction } from "../router/types";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Hotspot {
  /** Distance from top edge of the image, as percentage 0–100 */
  top: number;
  /** Distance from left edge of the image, as percentage 0–100 */
  left: number;
  /** Width as percentage 0–100 */
  width: number;
  /** Height as percentage 0–100 */
  height: number;
  /** Navigation action fired on tap (used when onTap is not provided) */
  action?: NavAction;
  /** Local state handler — called instead of dispatch when provided */
  onTap?: () => void;
  /** Optional label for debugging */
  label?: string;
}

interface HotspotScreenProps {
  /** Path relative to /public, e.g. "/screens/home.png" */
  src: string;
  hotspots: Hotspot[];
  dispatch: (action: NavAction) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Renders a full-screen PNG (the visual source of truth from Pixso)
 * and overlays transparent tap zones for navigation.
 *
 * PNG is always fitted to 375px wide, scaling height proportionally.
 * Hotspot coordinates are in % relative to the image dimensions.
 */
export default function HotspotScreen({
  src,
  hotspots,
  dispatch,
}: HotspotScreenProps) {
  return (
    <div style={styles.wrapper}>
      <img src={src} alt="" style={styles.image} draggable={false} />
      {hotspots.map((hs, i) => (
        <button
          key={i}
          aria-label={hs.label ?? `hotspot-${i}`}
          style={{
            ...styles.hotspot,
            top: `${hs.top}%`,
            left: `${hs.left}%`,
            width: `${hs.width}%`,
            height: `${hs.height}%`,
          }}
          onClick={() => {
            if (hs.onTap) { hs.onTap(); return; }
            if (hs.action) dispatch(hs.action);
          }}
        />
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
    userSelect: "none",
    WebkitUserSelect: "none",
  },
  hotspot: {
    position: "absolute",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    WebkitTapHighlightColor: "transparent",
  },
};
