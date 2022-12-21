import React from "react";
import Confetti from "react-confetti";
import useWindowDimensions from "../utils/useWindowDimensions";

export default function PointConfetti({ trigger, hover, buttonRef }) {
  const { width, height } = useWindowDimensions();

  return (
    <Confetti
      width={width}
      height={height}
      confettiSource={{
        w: 10,
        h: 10,
        x: buttonRef.current && buttonRef.current.offsetLeft + 72,
        y: buttonRef.current && buttonRef.current.offsetTop + 30,
      }}
      recycle={hover}
      run={trigger}
    />
  );
}
