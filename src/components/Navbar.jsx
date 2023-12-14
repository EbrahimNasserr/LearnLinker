import { faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { MenuToggle } from "./menuToggle/MenuToggle";
import { Menu } from "./menuToggle/Menu";
import logo from "../assets/logo.png";
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            {
              transform: "scale(1)",
              opacity: 1,
              filter: "blur(0px)",
            },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            {
              transform: "scale(0.5)",
              opacity: 0,
              filter: "blur(10px)",
            },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.9" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        {
          d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
        },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [animate, isOpen]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const scope = useMenuAnimation(isOpen);

  return (
    <motion.nav
      dir="ltr"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      className={
        !navState
          ? "w-full flex dark:bg-blackColor justify-between md:flex-row-reverse px-24 sm:px-3 fixed top-0 left-0 items-center z-50"
          : "w-full h-20 mm flex justify-between md:flex-row-reverse px-24 sm:px-3 py-6 duration-300 fixed top-0 left-0 items-center z-50 bg-whiteColor dark:bg-blackColor"
      }
    >
      <div className=" hidden md:flex" ref={scope}>
        <Menu />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
      <div className="flex flex-row md:flex-row-reverse md:w-[70%] sm:w-[70%] gap-5 items-center justify-center md:justify-between">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo.jpg" className=" w-36" />
          </Link>
        </div>
        <div>
          <DarkMode />
        </div>
      </div>
      <nav className=" md:hidden">
        <ul className=" flex justify-center gap-7 items-center">
          <motion.li
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
          >
            <Link to={"/login"}>
              <button className=" border-none font-Almarai custombutton text-lg font-medium lg:text-base md:text-sm text-whiteColor">
                تسجيل الدخول
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className=" ml-2 text-whiteColor"
                  fade
                />
              </button>
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: 250 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 120,
            }}
          >
            <Link to={"/register"}>
              <button className="button text-blackColor dark:text-whiteColor font-Almarai text-lg font-medium lg:text-base md:text-sm">
                !انشئ حسابك
                <FontAwesomeIcon
                  icon={faHouse}
                  className=" ml-2 text-aboutSectionColor"
                />
              </button>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.nav>
  );
};

export default Navbar;
