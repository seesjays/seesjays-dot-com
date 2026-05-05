import { GrainGradient } from "@paper-design/shaders-react";

export default function () {
  return (
    <GrainGradient
      speed={1}
      scale={1}
      rotation={0}
      offsetX={0}
      offsetY={0.05}
      softness={1}
      intensity={0.98}
      noise={1}
      shape="wave"
      colors={["#F2A243", "#FFE1CD", "#FFF2E2"]}
      colorBack="#00000000"
      className="h-full w-full bg-white"
    />
  );
}
