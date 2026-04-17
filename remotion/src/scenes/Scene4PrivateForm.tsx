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

// Scene 4: 2★ rating → routed to private internal feedback form (NOT Google)
export const Scene4PrivateForm: React.FC<{ vertical?: boolean }> = ({
  vertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Two stars filled (angry)
  const lowPillSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 12 },
  });
  const lowPillScale = interpolate(lowPillSpring, [0, 1], [0.6, 1]);

  // Google blocked icon shake
  const blockOp = interpolate(frame, [22, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const blockShake =
    blockOp >= 1
      ? Math.sin(frame * 0.5) * 3 * Math.max(0, 1 - (frame - 35) / 30)
      : 0;

  // Arrow to private form
  const arrowProg = interpolate(frame, [40, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Form slides in
  const formSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 18 },
  });
  const formY = interpolate(formSpring, [0, 1], [vertical ? 80 : 0, 0]);
  const formX = interpolate(formSpring, [0, 1], [vertical ? 0 : 250, 0]);
  const formOp = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Typing animation
  const typingProg = interpolate(frame, [85, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fullText =
    "Tap was still dripping when I got home. Tried calling but no answer.";
  const typedText = fullText.substring(0, Math.floor(typingProg * fullText.length));

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, #FFF5F5 0%, ${COLORS.bg} 100%)`,
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
            color: COLORS.red,
            textTransform: "uppercase",
          }}
        >
          1-2★ Path · Private
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
          Kept private. You handle it.
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
        {/* Detection pill + blocked Google */}
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
              transform: `scale(${lowPillScale})`,
              background: COLORS.red,
              color: "#fff",
              padding: "16px 28px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 20px 40px rgba(239,68,68,0.3)",
            }}
          >
            <Star size={28} fill="#fff" />
            <Star size={28} fill="#fff" />
            <Star size={28} fill="rgba(255,255,255,0.3)" />
            <Star size={28} fill="rgba(255,255,255,0.3)" />
            <Star size={28} fill="rgba(255,255,255,0.3)" />
            <span style={{ marginLeft: 6 }}>Detected</span>
          </div>

          {/* Blocked Google badge */}
          <div
            style={{
              opacity: blockOp,
              transform: `translateX(${blockShake}px)`,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#fff",
              border: `2px solid ${COLORS.red}`,
              borderRadius: 12,
              padding: "10px 16px",
              fontWeight: 700,
              fontSize: 15,
              color: COLORS.red,
              position: "relative",
            }}
          >
            <div style={{ display: "flex", gap: 1, fontWeight: 600 }}>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </div>
            <span style={{ color: COLORS.red }}>✕ Blocked</span>
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Arrow */}
          <div
            style={{
              width: vertical ? 4 : 180,
              height: vertical ? 60 : 4,
              background: COLORS.border,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              opacity: interpolate(frame, [38, 48], [0, 1], {
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
                }, ${COLORS.red}, ${COLORS.primary})`,
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
            INTERNAL ONLY →
          </div>
        </div>

        {/* Private form */}
        <div
          style={{
            transform: `translate(${formX}px, ${formY}px)`,
            opacity: formOp,
          }}
        >
          <PhoneFrame width={vertical ? 360 : 340}>
            <div
              style={{
                paddingTop: 70,
                padding: "70px 24px 24px",
                height: "100%",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: COLORS.muted,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                🔒 Private feedback
              </div>
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 800,
                  color: COLORS.ink,
                  marginTop: 8,
                  lineHeight: 1.25,
                }}
              >
                Sorry we missed the mark. What went wrong?
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.muted,
                  marginTop: 6,
                }}
              >
                Goes straight to Mitch — not posted publicly.
              </div>

              <div
                style={{
                  marginTop: 18,
                  background: "#FAF7FE",
                  border: `1.5px solid ${COLORS.border}`,
                  borderRadius: 10,
                  padding: 14,
                  minHeight: 130,
                  fontSize: 14,
                  color: COLORS.ink,
                  lineHeight: 1.5,
                }}
              >
                {typedText}
                {typingProg < 1 && typingProg > 0 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 2,
                      height: 16,
                      background: COLORS.primary,
                      marginLeft: 2,
                      verticalAlign: "middle",
                      opacity: Math.floor(frame / 8) % 2,
                    }}
                  />
                )}
              </div>

              <button
                style={{
                  marginTop: 16,
                  padding: "12px 16px",
                  background: COLORS.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Send privately
              </button>

              {/* Notification preview at bottom */}
              <div
                style={{
                  marginTop: "auto",
                  background: "#1A0F2E",
                  color: "#fff",
                  borderRadius: 12,
                  padding: 12,
                  fontSize: 12,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  opacity: interpolate(frame, [135, 150], [0, 1], {
                    extrapolateRight: "clamp",
                  }),
                  transform: `translateY(${interpolate(
                    frame,
                    [135, 150],
                    [10, 0],
                    { extrapolateRight: "clamp" },
                  )}px)`,
                }}
              >
                <div style={{ fontSize: 18 }}>📩</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Get Booked Out</div>
                  <div style={{ opacity: 0.8 }}>
                    Private feedback from Sarah · Tap to follow up
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </AbsoluteFill>
  );
};
