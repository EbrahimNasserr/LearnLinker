import { useEffect, useState } from "react";
import About from "./About";
// import RotateImg from "../../../public/assets/tech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Courses from "./Courses";
import Svg from "./Svg";

function Home() {
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => {
    setIsScroll(true);

    setTimeout(() => {
      setIsScroll(false);
    }, 1000);
  };

  const handleScroll = () => {
    const h1Element = document.querySelector(".centered-h1");
    if (h1Element) {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 0) {
        h1Element.classList.add("");
      } else {
        h1Element.classList.remove("");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className=" h-screen bg-image lg:p-0 dark:bg-blackColor">
        <div className="w-full h-1/2 z-10 flex justify-end items-center gap-5 flex-col relative">
          <motion.h1
            className=" dark:text-whiteColor relative centered-h1 font-extrabold text-6xl lg:text-5xl md:text-4xl text-blackColor"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            LearnLinker
          </motion.h1>
          <motion.h2
            className="  dark:text-whiteColor shape font-Almarai text-5xl lg:text-4xl md:text-3xl  text-blackColor "
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
            }}
          >
            مرحبا بك
          </motion.h2>
          {/* <motion.div
                        initial={{ y: 800 }}
                        animate={{ y: 0 }}
                        transition={{
                            type: "spring",
                            delay: 1,
                        }}
                        className=" absolute -z-10 w-[650px] lg:w-[545px] lg:top-[45px] md:top-[135px] sm:top-[50%] md:w-[385px] sm:w-[246px] top-[-100px]"
                    >
                        <img
                            src={RotateImg}
                            alt="RotateImg.png"
                            className="photo w-[650px] lg:w-[545px] lg:top-[45px] md:top-[135px] sm:top-[50%] md:w-[385px] sm:w-[246px] top-[-100px]"
                        />
                    </motion.div> */}
        </div>
        <div className="text-center relative bottom-12">
          <a
            href="#about"
            className={`inline-block transition-transform duration-500 ${
              isScroll ? "animate-bounce" : "animate-bounce"
            }`}
            onClick={handleClick}
          >
            <FontAwesomeIcon
              icon={faAnglesDown}
              size="2x"
              className=" text-blackColor dark:text-whiteColor mt-80 relative bottom-5"
            />
          </a>
        </div>
        <div className="anim">
          <Svg />
        </div>
      </section>
      <About />
      <Courses />
    </>
  );
}

export default Home;
