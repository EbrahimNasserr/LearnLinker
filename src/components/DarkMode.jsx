import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../App.scss";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const switchBTN = document.getElementById("switch");

    function clickEvent() {
      if (document.getElementById("main").classList.contains("main--light")) {
        document.getElementById("main").classList.remove("main--light");
        document.getElementById("main").classList.add("main--dark");
      } else {
        document.getElementById("main").classList.remove("main--dark");
        document.getElementById("main").classList.add("main--light");
      }
    }

    if (switchBTN) {
      switchBTN.addEventListener("click", clickEvent);
    }

    return () => {
      if (switchBTN) {
        switchBTN.removeEventListener("click", clickEvent);
      }
    };
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="main main--light " id="main">
      <span className="text text--light"></span>
      <span className="text text--dark"></span>

      <button type="button" id="switch" onClick={handleThemeSwitch}>
        <i className="bx bxs-sun">
          <FontAwesomeIcon icon={faSun} />
        </i>
        <span className="btn-switch"></span>
        <i className="bx bxs-moon">
          <FontAwesomeIcon icon={faMoon} />
        </i>
      </button>
    </div>
  );
};

export default DarkMode;
