import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["AWS & DevOps Engineer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col mt-4 lg:mt-16 gap-5">
        {/* <h4 className=" text-lg font-normal">Hey...</h4> */}
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize">MUTHUKUMAR</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate and dedicated fresher with a strong foundation in AWS cloud
          computing, DevOps methodologies, and CI/CD automation.Seeking an
          opportunity to contribute to cloud-based projects, improve deployment
          efficiency grow within a fast-paced DevOps environment
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
