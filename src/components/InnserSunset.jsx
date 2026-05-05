import { GrainGradient } from "@paper-design/shaders-react";

export default function () {
  return (
    <GrainGradient
      speed={1.8}
      scale={3}
      rotation={0}
      offsetX={0}
      offsetY={0.7}
      softness={0.2}
      intensity={0.9}
      noise={20}
      shape="ripple"
      colors={["#F2A243", "#FFE1CD", "#FFF2E2"]}
      colorBack="#FFFCFA"
      className="h-full w-full"
    />
  );
}
