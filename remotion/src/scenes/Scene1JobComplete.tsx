import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import { PhoneFrame } from "../components/PhoneFrame";
import { COLORS } from "../theme";

// Scene 1: Job marked complete on tradie's dashboard → SMS auto-sends to customer
export const Scene1JobComplete: React.FC<{ vertical?: boolean }> = ({
  vertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerY = interpolate(frame, [0, 18], [-30, 0], {
    extrapolateRight: "clamp",
  });
  const headerOp = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const cardSpring = spring({ frame: frame - 12, fps, config: { damping: 18 } });
  const cardY = interpolate(cardSpring, [0, 1], [40, 0]);

  // Check appears
  const checkScale = spring({
    frame: frame - 38,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  // Status flips to complete
  const statusFade = interpolate(frame, [40, 52], [0, 1], {
    extrapolateRight: "clamp",
  });

  // SMS bubble flies into phone
  const smsSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 16 },
  });
  const smsX = interpolate(smsSpring, [0, 1], [vertical ? 200 : 350, 0]);
  const smsOp = interpolate(frame, [70, 82], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Phone enters
  const phoneSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 18 },
  });
  const phoneX = interpolate(phoneSpring, [0, 1], [vertical ? 0 : 200, 0]);
  const phoneOp = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg} 0%, #EFE6FB 100%)`,
      }}
    >
      {/* Header label */}
      <div
        style={{
          position: "absolute",
          top: vertical ? 120 : 80,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: headerOp,
          transform: `translateY(${headerY}px)`,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 4,
            color: COLORS.primary,
            textTransform: "uppercase",
          }}
        >
          Step 1
        </div>
        <div
          style={{
            fontSize: vertical ? 56 : 64,
            fontWeight: 800,
            color: COLORS.ink,
            marginTop: 12,
            lineHeight: 1.05,
          }}
        >
          Job marked complete.
        </div>
      </div>

      {/* Layout: dashboard card on left, phone on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: vertical ? 30 : 80,
          paddingTop: vertical ? 380 : 220,
          paddingBottom: vertical ? 60 : 60,
        }}
      >
        {/* Dashboard card */}
        <div
          style={{
            background: COLORS.card,
            borderRadius: 24,
            padding: 32,
            width: vertical ? 520 : 480,
            boxShadow: "0 30px 60px rgba(26,15,46,0.12)",
            border: `1px solid ${COLORS.border}`,
            opacity: interpolate(frame, [12, 28], [0, 1], {
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${cardY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: COLORS.muted,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            Today's Jobs
          </div>
          <div
            style={{
              marginTop: 18,
              padding: 24,
              background: COLORS.cardSoft,
              borderRadius: 16,
              border: `1.5px solid ${
                statusFade > 0.5 ? COLORS.green : COLORS.border
              }`,
              transition: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{ fontSize: 22, fontWeight: 700, color: COLORS.ink }}
                >
                  Sarah Mitchell
                </div>
                <div
                  style={{ fontSize: 16, color: COLORS.inkSoft, marginTop: 4 }}
                >
                  Kitchen tap repair · 14 Wattle St
                </div>
              </div>
              <div
                style={{
                  background: interpolate(
                    statusFade,
                    [0, 1],
                    [0, 1],
                  ) > 0.5
                    ? COLORS.green
                    : COLORS.muted,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  padding: "6px 12px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  opacity: statusFade,
                }}
              >
                ✓ Complete
              </div>
            </div>
            {/* Big checkmark animation */}
            <div
              style={{
                marginTop: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  background: COLORS.green,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${checkScale})`,
                }}
              >
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <path
                    d="M5 12l5 5L20 7"
                    stroke="#fff"
                    strokeWidth={3.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: COLORS.inkSoft,
                  opacity: interpolate(frame, [50, 62], [0, 1], {
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                Triggering review request →
              </div>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div
          style={{
            transform: `translateX(${phoneX}px)`,
            opacity: phoneOp,
          }}
        >
          <PhoneFrame width={vertical ? 380 : 340}>
            <div
              style={{
                paddingTop: 90,
                paddingLeft: 24,
                paddingRight: 24,
                height: "100%",
                background: "#F7F5FA",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: COLORS.muted,
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                Messages
              </div>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  justifyContent: "flex-start",
                  opacity: smsOp,
                  transform: `translateX(${-smsX}px)`,
                }}
              >
                <div
                  style={{
                    background: "#E5E5EA",
                    color: COLORS.ink,
                    padding: "18px 22px",
                    borderRadius: 24,
                    borderBottomLeftRadius: 8,
                    maxWidth: "90%",
                    fontSize: 22,
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  Hey Sarah! Thanks for choosing us today. Mind sharing a quick
                  rating? 👇
                  <div
                    style={{
                      color: COLORS.primary,
                      marginTop: 10,
                      fontWeight: 700,
                      textDecoration: "underline",
                      fontSize: 20,
                    }}
                  >
                    review.gbo.au/sm
                  </div>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 16,
                  fontSize: 16,
                  color: COLORS.muted,
                  opacity: smsOp,
                  fontWeight: 600,
                }}
              >
                sent automatically · just now
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </AbsoluteFill>
  );
};
