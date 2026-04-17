import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { PhoneFrame } from "../components/PhoneFrame";
import { Star } from "../components/Star";
import { COLORS } from "../theme";

// Scene 3: 5★ → routed to Google Business review page
export const Scene3GoogleRedirect: React.FC<{ vertical?: boolean }> = ({
  vertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Pill: "5★ detected" pulses in
  const pillSpring = spring({ frame: frame - 8, fps, config: { damping: 12 } });
  const pillScale = interpolate(pillSpring, [0, 1], [0.6, 1]);

  // Arrow flow
  const arrowProg = interpolate(frame, [22, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Google logo + page slides in
  const googleSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 18 },
  });
  const googleX = interpolate(googleSpring, [0, 1], [vertical ? 0 : 250, 0]);
  const googleY = interpolate(googleSpring, [0, 1], [vertical ? 80 : 0, 0]);
  const googleOp = interpolate(frame, [40, 58], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Submit button pulse
  const submitGlow = interpolate(
    frame,
    [85, 100, 115],
    [0, 1, 0],
    { extrapolateRight: "clamp" },
  );

  // Confetti at end
  const confettiProg = interpolate(frame, [105, 145], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg} 0%, #EFE6FB 100%)`,
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: vertical ? 100 : 70,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: headerOp,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 4,
            color: COLORS.green,
            textTransform: "uppercase",
          }}
        >
          5★ Path · Public
        </div>
        <div
          style={{
            fontSize: vertical ? 50 : 58,
            fontWeight: 800,
            color: COLORS.ink,
            marginTop: 10,
            lineHeight: 1.05,
          }}
        >
          Sent straight to Google.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: vertical ? 20 : 60,
          paddingTop: vertical ? 280 : 80,
        }}
      >
        {/* Detection pill */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              transform: `scale(${pillScale})`,
              background: COLORS.green,
              color: "#fff",
              padding: "16px 28px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 20px 40px rgba(34,197,94,0.3)",
            }}
          >
            <Star size={28} fill="#fff" />
            <Star size={28} fill="#fff" />
            <Star size={28} fill="#fff" />
            <Star size={28} fill="#fff" />
            <Star size={28} fill="#fff" />
            <span style={{ marginLeft: 6 }}>Detected</span>
          </div>

          {/* Flow arrow */}
          <div
            style={{
              width: vertical ? 4 : 200,
              height: vertical ? 80 : 4,
              background: COLORS.border,
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              opacity: interpolate(frame, [20, 30], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(${
                  vertical ? "180deg" : "90deg"
                }, ${COLORS.green}, ${COLORS.googleGreen})`,
                transform: vertical
                  ? `scaleY(${arrowProg})`
                  : `scaleX(${arrowProg})`,
                transformOrigin: vertical ? "top" : "left",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: COLORS.muted,
              opacity: arrowProg,
              letterSpacing: 1,
            }}
          >
            AUTO-REDIRECT →
          </div>
        </div>

        {/* Google review page */}
        <div
          style={{
            transform: `translate(${googleX}px, ${googleY}px)`,
            opacity: googleOp,
            position: "relative",
          }}
        >
          <PhoneFrame width={vertical ? 460 : 440}>
            <div
              style={{
                paddingTop: 80,
                padding: "80px 0 0",
                height: "100%",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Google header */}
              <div
                style={{
                  padding: "20px 26px",
                  borderBottom: "1px solid #E8E8E8",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
                <span style={{ color: COLORS.inkSoft, marginLeft: 8, fontSize: 18, fontWeight: 600 }}>
                  Reviews
                </span>
              </div>
              <div style={{ padding: 26, flex: 1 }}>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: COLORS.ink,
                  }}
                >
                  Mitch's Plumbing Co
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: COLORS.muted,
                    marginTop: 4,
                  }}
                >
                  Sydney · Plumber
                </div>
                <div
                  style={{
                    marginTop: 28,
                    fontSize: 19,
                    color: COLORS.ink,
                    fontWeight: 700,
                  }}
                >
                  Rate your experience
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={48} fill={COLORS.accent} />
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 24,
                    background: "#F8F9FA",
                    border: "1px solid #E8E8E8",
                    borderRadius: 10,
                    padding: 18,
                    fontSize: 18,
                    color: COLORS.ink,
                    minHeight: 110,
                    lineHeight: 1.45,
                    fontWeight: 500,
                  }}
                >
                  Mitch was on time, sorted my leaking tap in 20 mins and left
                  the place spotless. Highly recommend!
                </div>
                <button
                  style={{
                    marginTop: 24,
                    width: "100%",
                    padding: "16px 20px",
                    background: COLORS.google,
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    fontSize: 20,
                    fontWeight: 800,
                    boxShadow: `0 0 ${submitGlow * 30}px ${COLORS.google}`,
                  }}
                >
                  Post review
                </button>
              </div>
            </div>
          </PhoneFrame>

          {/* Confetti */}
          {confettiProg > 0 &&
            Array.from({ length: 18 }).map((_, i) => {
              const delay = i * 0.5;
              const x = (i * 37) % 300 - 150;
              const y = -confettiProg * (200 + (i % 4) * 50) + delay * 8;
              const rot = confettiProg * (180 + i * 20);
              const colors = [
                COLORS.primary,
                COLORS.accent,
                COLORS.green,
                COLORS.primaryLight,
              ];
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 10,
                    height: 14,
                    background: colors[i % 4],
                    transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
                    opacity: interpolate(confettiProg, [0, 0.2, 1], [0, 1, 0]),
                    borderRadius: 2,
                  }}
                />
              );
            })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
