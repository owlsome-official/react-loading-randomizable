import { useMemo } from "react";
import {
  BabelLoading,
  BlockLoading,
  BlockReserveLoading,
  BoxLoading,
  CircleLoading,
  CircleToBlockLoading,
  CommonLoading,
  DisappearedLoading,
  LoopCircleLoading,
  NineCellLoading,
  TouchBallLoading,
  TransverseLoading,
  WaveLoading,
  WaveTopBottomLoading,
  WindMillLoading,
  JumpCircleLoading,
  MeteorRainLoading,
  RotateCircleLoading,
  StickyBallLoading,
  SemipolarLoading,
  SolarSystemLoading,
  LadderLoading,
  HeartBoomLoading,
  RollBoxLoading,
  RectGraduallyShowLoading,
  PointSpreadLoading,
  ThreeHorseLoading,
  PassThrouthLoading,
  CoffeeLoading,
  BatteryLoading,
} from "../LoadingElement";

interface LoadingComponentProps {
  index?: number;
  size?: string;
  color?: string;
}

const LoadingComponent = ({
  index = 0,
  size = "large",
  color = "#fff",
}: LoadingComponentProps) => {
  const listOfLoading = useMemo(
    () => [
      <BabelLoading key="BabelLoading" size={size} color={color} />,
      <BlockLoading key="BlockLoading" size={size} color={color} />,
      <BlockReserveLoading
        key="BlockReserveLoading"
        size={size}
        color={color}
      />,
      <BoxLoading key="BoxLoading" size={size} color={color} />,
      <CircleLoading key="CircleLoading" size={size} color={color} />,
      <CircleToBlockLoading
        key="CircleToBlockLoading"
        size={size}
        color={color}
      />,
      <CommonLoading key="CommonLoading" size={size} color={color} />,
      <DisappearedLoading key="DisappearedLoading" size={size} color={color} />,
      <LoopCircleLoading key="LoopCircleLoading" size={size} color={color} />,
      <NineCellLoading key="NineCellLoading" size={size} color={color} />,
      <TouchBallLoading key="TouchBallLoading" size={size} color={color} />,
      <TransverseLoading key="TransverseLoading" size={size} color={color} />,
      <WaveLoading key="WaveLoading" size={size} color={color} />,
      <WaveTopBottomLoading
        key="WaveTopBottomLoading"
        size={size}
        color={color}
      />,
      <WindMillLoading key="WindMillLoading" size={size} color={color} />,
      <JumpCircleLoading key="JumpCircleLoading" size={size} color={color} />,
      <MeteorRainLoading key="MeteorRainLoading" size={size} color={color} />,
      <RotateCircleLoading
        key="RotateCircleLoading"
        size={size}
        color={color}
      />,
      <StickyBallLoading key="StickyBallLoading" size={size} color={color} />,
      <SemipolarLoading key="SemipolarLoading" size={size} color={color} />,
      <SolarSystemLoading key="SolarSystemLoading" size={size} color={color} />,
      <LadderLoading key="LadderLoading" size={size} color={color} />,
      <HeartBoomLoading key="HeartBoomLoading" size={size} color={color} />,
      <RollBoxLoading key="RollBoxLoading" size={size} color={color} />,
      <RectGraduallyShowLoading
        key="RectGraduallyShowLoading"
        size={size}
        color={color}
      />,
      <PointSpreadLoading key="PointSpreadLoading" size={size} color={color} />,
      <ThreeHorseLoading key="ThreeHorseLoading" size={size} color={color} />,
      <PassThrouthLoading key="PassThrouthLoading" size={size} color={color} />,
      <CoffeeLoading key="CoffeeLoading" size={size} color={color} />,
      <BatteryLoading key="BatteryLoading" size={size} color={color} />,
    ],
    [color, size]
  );
  return <>{listOfLoading.at(index % listOfLoading.length)}</>;
};

export default LoadingComponent;
