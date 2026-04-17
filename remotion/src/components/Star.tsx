import React from "react";
import { COLORS } from "../theme";

export const Star: React.FC<{
  size?: number;
  fill?: string;
  stroke?: string;
}> = ({ size = 60, fill = COLORS.accent, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={fill}
      stroke={stroke ?? "none"}
      strokeWidth={stroke ? 1.5 : 0}
    />
  </svg>
);
