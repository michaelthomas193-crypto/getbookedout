import React from "react";
import { AbsoluteFill } from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/DMSans";

import { Scene1JobComplete } from "./scenes/Scene1JobComplete";
import { Scene2CustomerRates } from "./scenes/Scene2CustomerRates";
import { Scene3GoogleRedirect } from "./scenes/Scene3GoogleRedirect";
import { Scene4PrivateForm } from "./scenes/Scene4PrivateForm";
import { Scene5EndCard } from "./scenes/Scene5EndCard";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Scene durations (frames @ 30fps)
// 1: 110, 2: 110, 3: 150, 4: 165, 5: 145
// transitions: 4 x 18 frames overlap
// Total = sum - 4*18 = 680 - 72 = 608 frames ≈ 20.3s
export const MAIN_DURATION = 608;

export const MainVideo: React.FC<{ vertical?: boolean }> = ({
  vertical = false,
}) => {
  const transition = (dir: "from-right" | "from-bottom" = "from-right") => (
    <TransitionSeries.Transition
      presentation={slide({ direction: dir })}
      timing={springTiming({
        config: { damping: 200 },
        durationInFrames: 18,
      })}
    />
  );

  return (
    <AbsoluteFill style={{ fontFamily, background: "#F5F2FA" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene1JobComplete vertical={vertical} />
        </TransitionSeries.Sequence>
        {transition()}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene2CustomerRates vertical={vertical} />
        </TransitionSeries.Sequence>
        {transition("from-right")}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene3GoogleRedirect vertical={vertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 18 })}
        />
        <TransitionSeries.Sequence durationInFrames={165}>
          <Scene4PrivateForm vertical={vertical} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 18 })}
        />
        <TransitionSeries.Sequence durationInFrames={145}>
          <Scene5EndCard vertical={vertical} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
