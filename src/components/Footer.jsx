import {
  faCcAmazonPay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faSnapchat,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhoneVolume,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="relative" dir="ltr">
      <div className=" flex-row-reverse flex p-12 gap-12 sm:justify-center items-center bg-blackColor justify-between flex-wrap">
        <div>
          <ul className=" flex flex-col gap-2 text-right sm:text-center text-xl">
            <li className=" text-whiteColor mb-2">
              +(971) 5027-7699
              <FontAwesomeIcon icon={faPhoneVolume} className=" ml-2" />
            </li>
            <li className=" text-whiteColor mb-2">
              Al Dhaid, Sharjah , UAE
              <FontAwesomeIcon icon={faLocation} className=" ml-2" />
            </li>
            <li className=" text-whiteColor mb-2">
              info@alfkama.com
              <FontAwesomeIcon icon={faEnvelope} className=" ml-2" />
            </li>
          </ul>
          <div className=" flex items-center justify-between mt-4 text-2xl">
            <a
              href="http://"
              className=" text-whiteColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="http://"
              className=" text-whiteColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="http://"
              className=" text-whiteColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faX} />
            </a>
            <a
              href="http://"
              className=" text-whiteColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a
              href="http://"
              className=" text-whiteColor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className=" text-center">
          <ul className=" text-whiteColor font-light text-2xl">
            <li className="mb-2">
              <a href="#new">خدماتنا</a>
            </li>
            <li className="mb-2">
              <a href="#new">سياسه الخصوصيه</a>
            </li>
            <li className="mb-2">
              <a href="#new">تواصل معنا</a>
            </li>
          </ul>
          <div className=" text-whiteColor flex items-center justify-between text-3xl mt-4">
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcAmazonPay} />
            <FontAwesomeIcon icon={faCcPaypal} />
          </div>
        </div>
        <div>
          <img src={logo} alt="logo.jpg" className=" w-60" />
        </div>
      </div>
      <div className=" flex justify-center items-center text-xl p-2 font-bold bg-lightBlueColor text-whiteColor">
        Development & design
      </div>
    </div>
  );
};

export default Footer;
