import React from "react";
import type { IconName, IconSize } from "./types";

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

// SVG modules imported inline via ?raw
// Vite handles SVG as React components when imported with ?react suffix
const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className,
  style,
}) => {
  const src = `/icons/${size}/${name}.svg`;
  return (
    <img
      src={src}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", flexShrink: 0, ...style }}
      alt={name}
      aria-hidden="true"
    />
  );
};

export default Icon;
export type { IconName, IconSize };
