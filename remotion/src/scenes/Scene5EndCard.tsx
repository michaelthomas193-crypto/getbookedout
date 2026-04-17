import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { Star } from "../components/Star";
import { COLORS } from "../theme";

// Scene 5: End card — stat + Get Booked Out wordmark
export const Scene5EndCard: React.FC<{ vertical?: boolean }> = ({
  vertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Stars rain
  const starsOp = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Stat counter
  const counter = Math.floor(
    interpolate(frame, [10, 60], [0, 5], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * 10,
  ) / 2; // 0 to 5 in 0.5 steps... use whole stars
  const filledStars = Math.min(5, Math.floor(counter));

  // Headline
  const headSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 16 },
  });
  const headY = interpolate(headSpring, [0, 1], [40, 0]);
  const headOp = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Sub
  const subOp = interpolate(frame, [50, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [50, 70], [20, 0], {
    extrapolateRight: "clamp",
  });

  // Logo wordmark
  const logoSpring = spring({
    frame: frame - 75,
    fps,
    config: { damping: 14 },
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.85, 1]);
  const logoOp = interpolate(frame, [75, 95], [0, 1], {
    extrapolateRight: "clamp",
  });

  // URL
  const urlOp = interpolate(frame, [100, 120], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${COLORS.primaryDeep} 0%, ${COLORS.bgDeep} 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Floating background stars */}
      {Array.from({ length: 14 }).map((_, i) => {
        const baseX = ((i * 137) % 100) - 5;
        const baseY = ((i * 211) % 100);
        const drift = Math.sin(frame * 0.02 + i) * 8;
        const sizes = [16, 22, 14, 28, 18];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${baseX}%`,
              top: `${baseY}%`,
              transform: `translateY(${drift}px) rotate(${i * 23}deg)`,
              opacity: starsOp * (0.08 + ((i % 3) * 0.06)),
            }}
          >
            <Star size={sizes[i % 5]} fill={COLORS.primaryLight} />
          </div>
        );
      })}

      {/* Big stars row */}
      <div
        style={{
          display: "flex",
          gap: 14,
          opacity: starsOp,
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const popped = i < filledStars;
          const popSpring = spring({
            frame: frame - (12 + i * 8),
            fps,
            config: { damping: 8, stiffness: 200 },
          });
          return (
            <div
              key={i}
              style={{
                transform: `scale(${popped ? popSpring : 0.6})`,
                opacity: popped ? 1 : 0.2,
              }}
            >
              <Star size={vertical ? 60 : 70} fill={COLORS.accent} />
            </div>
          );
        })}
      </div>

      {/* Headline */}
      <div
        style={{
          marginTop: 50,
          fontSize: vertical ? 68 : 96,
          fontWeight: 900,
          textAlign: "center",
          letterSpacing: -2,
          lineHeight: 1.0,
          opacity: headOp,
          transform: `translateY(${headY}px)`,
          padding: "0 60px",
          background: `linear-gradient(180deg, #fff 0%, ${COLORS.primaryLight} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        More 5★ reviews.
        <br />
        Zero public 1★.
      </div>

      {/* Sub */}
      <div
        style={{
          marginTop: 28,
          fontSize: vertical ? 22 : 26,
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          maxWidth: 700,
          padding: "0 40px",
          opacity: subOp,
          transform: `translateY(${subY}px)`,
          lineHeight: 1.4,
        }}
      >
        Automated review requests, smart routing, real reputation growth.
      </div>

      {/* Logo wordmark */}
      <div
        style={{
          marginTop: vertical ? 70 : 60,
          transform: `scale(${logoScale})`,
          opacity: logoOp,
          fontSize: vertical ? 56 : 72,
          fontWeight: 900,
          letterSpacing: -2,
          display: "flex",
          alignItems: "baseline",
          gap: 14,
        }}
      >
        <span style={{ color: "#fff", fontWeight: 600 }}>Get</span>
        <span
          style={{
            color: COLORS.primaryLight,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          BOOKED
        </span>
        <span style={{ color: "#fff", fontWeight: 600 }}>Out</span>
      </div>

      {/* URL */}
      <div
        style={{
          marginTop: 24,
          fontSize: vertical ? 18 : 20,
          color: COLORS.primaryLight,
          fontWeight: 700,
          letterSpacing: 1,
          opacity: urlOp,
        }}>
        getbookedout.com.au
      </div>
    </AbsoluteFill>
  );
};
