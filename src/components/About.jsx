import { useEffect, useRef } from "react"; // import Splitting from "splitting";
// import ScrollOut from "scroll-out";
import about from "../assets/about.png";
// import LineSection from "./LineSection";
// import { motion, useScroll, useSpring } from "framer-motion";
// import "./line";

function About() {
  const svgRef = useRef(null);
  const numberOfLines = 20;
  const lineDataArr = [];

  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createPathString = () => {
    let completedPath = "";
    const comma = ",";
    const ampl = 50;

    for (let i = 0; i < numberOfLines; i++) {
      const path = lineDataArr[i];

      const current = {
        x: ampl * Math.sin(path.counter / path.sin),
        y: ampl * Math.cos(path.counter / path.cos),
      };

      const newPathSection =
        "M" +
        path.startX +
        comma +
        path.startY +
        " Q" +
        path.pointX +
        comma +
        (current.y * 1.5).toFixed(3) +
        " " +
        (current.x / 10 + path.centerX).toFixed(3) +
        comma +
        (current.y / 5 + path.centerY).toFixed(3) +
        " T" +
        path.endX +
        comma +
        path.endY;

      path.counter++;
      completedPath += newPathSection;
    }

    return completedPath;
  };

  const createLines = () => {
    const svgElement = svgRef.current;

    for (let i = 0; i < numberOfLines; i++) {
      const lineDataObj = {
        counter: randomRange(1, 500),
        startX: randomRange(-5, -40),
        startY: randomRange(-5, -30),
        endX: randomRange(200, 220),
        endY: randomRange(120, 140),
        sin: randomRange(85, 150),
        cos: randomRange(85, 150),
        pointX: randomRange(30, 55),
        centerX: randomRange(90, 120),
        centerY: randomRange(60, 70),
      };

      lineDataArr.push(lineDataObj);
    }

    const newPathEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    // Set the stroke-width to 0.5px
    newPathEl.setAttribute("stroke-width", "0.5");
    svgElement.appendChild(newPathEl);

    const animLoop = () => {
      newPathEl.setAttribute("d", createPathString());
      requestAnimationFrame(animLoop);
    };

    animLoop();
  };

  useEffect(() => {
    createLines();
  }, []);

  return (
    <section id="about" className=" px-0">
      <div className=" bg-secondColor overflow-hidden bg-about-img bg-blend-soft-light z-10 relative px-24 py-10 sm:px-3">
        <div className=" flex flex-wrap md:h-auto flex-row-reverse justify-between items-center md:flex-col md:gap-20">
          <div className=" basis-1/3">
            <img className=" w-80" src={about} alt="about-img" />
          </div>
          <div className=" basis-1/2 text-right md:text-center">
            <h2 className=" text-5xl sm:text-4xl mb-5 font-bold text-whiteColor">
              منصه / ليرن لينكر
            </h2>
            <p className=" text-whiteColor font-thin text-xl">
              مجمع دورات YouTube هو نظام مصمم لتبسيط عملية التعلم عملية للطلاب
              من خلال دمج وتنظيم دروس يوتيوب عبر مجالات مختلفة، بما في ذلك تطوير
              الويب، Flutter، والأمن السيبراني، و الذكاء الاصطناعي.
            </p>
          </div>
        </div>
        {/* <LineSection /> */}
        <svg
          ref={svgRef}
          className="animated-lines absolute top-0 left-0 -z-10 h-full w-full path-about"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 120"
        ></svg>
      </div>
    </section>
  );
}

export default About;
