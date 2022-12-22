import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import Container from "./container";

const PointConfetti = dynamic(() => import("./pointConfetti"), {
  ssr: false,
});

export default function Hero() {
  const [trigger, setTrigger] = useState(false);
  const [hover, setHover] = useState(false);

  const buttonRef = useRef();

  const handleHover = () => {
    setTrigger(true);
    setHover(true);
  };

  return (
    <>
      <Container className="flex justify-center ">
        <div className="flex items-center w-full lg:w-2/3">
          <div className="flex flex-col items-center max-w-5xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white text-center pb-20">
              Go from 💡 to landing page. <br />
              It takes one sentence.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-center pb-20">
              Create full launch-ready landing pages from your idea. All you
              need is a short description of your need. Made for builders,
              marketers and agencies.
            </p>

            <a
              href="https://twitter.com/lennardeth/status/1605296091800276993?s=20&t=AWXtdNStbdBHZBlyFVFFSg"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => setHover(false)}
              ref={buttonRef}
            >
              Get started
            </a>
          </div>
          <PointConfetti
            trigger={trigger}
            hover={hover}
            setTrigger={setTrigger}
            buttonRef={buttonRef}
            tweenDuration={100}
          />
        </div>
      </Container>
    </>
  );
}
