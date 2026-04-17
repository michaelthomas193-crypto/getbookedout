import React from "react";
import { COLORS } from "../theme";

export const PhoneFrame: React.FC<{
  children: React.ReactNode;
  width?: number;
  scale?: number;
}> = ({ children, width = 380, scale = 1 }) => {
  const height = width * 2.05;
  const radius = width * 0.13;
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: "#0A0612",
        padding: 10,
        boxShadow:
          "0 40px 80px rgba(26, 15, 46, 0.35), 0 8px 24px rgba(123, 44, 191, 0.2), inset 0 0 0 1.5px rgba(255,255,255,0.06)",
        transform: `scale(${scale})`,
        transformOrigin: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: radius - 8,
          background: COLORS.card,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* notch */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 28,
            borderRadius: 20,
            background: "#0A0612",
            zIndex: 10,
          }}
        />
        {/* status bar */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 32px",
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.ink,
            zIndex: 9,
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 11 }}>●●●●</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
