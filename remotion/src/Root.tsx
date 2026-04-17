import React from "react";
import { Composition } from "remotion";
import { MainVideo, MAIN_DURATION } from "./MainVideo";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="main"
      component={MainVideo as any}
      durationInFrames={MAIN_DURATION}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ vertical: false }}
    />
    <Composition
      id="vertical"
      component={MainVideo as any}
      durationInFrames={MAIN_DURATION}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ vertical: true }}
    />
  </>
);
