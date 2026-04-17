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

// Scene 2: Customer opens link → sees rating screen → taps 5 stars
export const Scene2CustomerRates: React.FC<{ vertical?: boolean }> = ({
  vertical,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Phone scale-in
  const phoneSpring = spring({ frame: frame - 5, fps, config: { damping: 16 } });
  const phoneScale = interpolate(phoneSpring, [0, 1], [0.85, 1]);
  const phoneOp = interpolate(frame, [5, 22], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Stars cascade in
  const starOps = [0, 1, 2, 3, 4].map((i) =>
    spring({ frame: frame - 30 - i * 4, fps, config: { damping: 12 } }),
  );

  // Finger tap on 5th star at ~frame 70
  const tapFrame = 70;
  const fingerY = interpolate(
    frame,
    [60, tapFrame],
    [120, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const fingerOp = interpolate(frame, [58, 64, tapFrame + 8, tapFrame + 16], [
    0, 1, 1, 0,
  ], { extrapolateRight: "clamp" });

  // Stars fill gold one by one as tap registers
  const fillProgress = interpolate(
    frame,
    [tapFrame, tapFrame + 25],
    [0, 5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Pulse on tap
  const tapPulse = spring({
    frame: frame - tapFrame,
    fps,
    config: { damping: 8, stiffness: 200 },
  });
  const tapScale = interpolate(tapPulse, [0, 0.5, 1], [1, 1.15, 1]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg} 0%, #EFE6FB 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: headerOp,
          marginBottom: vertical ? 40 : 30,
          marginTop: vertical ? -40 : 0,
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
          Step 2
        </div>
        <div
          style={{
            fontSize: vertical ? 52 : 60,
            fontWeight: 800,
            color: COLORS.ink,
            marginTop: 10,
          }}
        >
          Customer rates the job.
        </div>
      </div>

      <div
        style={{
          transform: `scale(${phoneScale})`,
          opacity: phoneOp,
          position: "relative",
        }}
      >
        <PhoneFrame width={vertical ? 480 : 460}>
          <div
            style={{
              paddingTop: 80,
              padding: "80px 32px 32px",
              height: "100%",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 28,
                marginTop: 16,
              }}
            >
              GBO
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: COLORS.ink,
                marginTop: 24,
                textAlign: "center",
              }}
            >
              How did we do?
            </div>
            <div
              style={{
                fontSize: 19,
                color: COLORS.muted,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Sarah, your feedback means the world.
            </div>

            {/* Stars row */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 56,
                position: "relative",
              }}
            >
              {[0, 1, 2, 3, 4].map((i) => {
                const filled = fillProgress > i;
                return (
                  <div
                    key={i}
                    style={{
                      transform: `scale(${
                        starOps[i] * (i === 4 ? tapScale : 1)
                      })`,
                      opacity: starOps[i],
                    }}
                  >
                    <Star
                      size={64}
                      fill={filled ? COLORS.accent : "#E8DEF5"}
                      stroke={filled ? undefined : "#D4C5E8"}
                    />
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 20,
                color: COLORS.ink,
                opacity: interpolate(frame, [tapFrame + 5, tapFrame + 20], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                fontWeight: 700,
              }}
            >
              ⭐ Excellent — 5/5
            </div>

            {/* Finger / tap indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 130,
                right: 50,
                transform: `translateY(${fingerY}px)`,
                opacity: fingerOp,
                fontSize: 72,
                pointerEvents: "none",
              }}
            >
              👆
            </div>
          </div>
        </PhoneFrame>
      </div>
    </AbsoluteFill>
  );
};
