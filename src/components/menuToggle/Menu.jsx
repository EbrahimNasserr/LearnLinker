import { faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav className=" w-full absolute top-16 right-0">
            <ul className=" flex flex-col w-full items-end justify-center gap-7 rounded-lg p-2 bg-primaryColor">
                <li>
                    <Link to={"/login"}>
                        <button className="border-none font-Almarai text-base lg:text-sm text-whiteColor">
                            تسجيل الدخول
                            <FontAwesomeIcon
                                icon={faRightToBracket}
                                className=" ml-2 text-whiteColor "
                                fade
                            />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={"/register"}>
                        <button className=" text-whiteColor font-Almarai lg:text-sm">
                            !انشئ حسابك
                            <FontAwesomeIcon
                                icon={faHouse}
                                className=" ml-2 text-aboutSectionColor"
                            />
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
