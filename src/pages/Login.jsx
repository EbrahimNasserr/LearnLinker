import { useEffect } from "react";
import { Link } from "react-router-dom";
import loginPhoto from "../assets/login-img.svg";
import Aos from "aos";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Aos.init({
      // Global settings (optional)
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Only once on scroll
    });
  }, []);
  return (
    <section className=" relative h-screen md:px-5">
      <div className=" md:hidden">
        <img
          src={loginPhoto}
          alt="login.png"
          className=" absolute left-0 top-0 h-screen object-cover bg-cover bg-center -z-10"
        />
      </div>
      <div className=" flex items-center justify-end lg:justify-center z-50 flex-row-reverse">
        <div className=" text-right h-[30rem] flex flex-col justify-end sm:h-[80vh]">
          <h2 className=" text-6xl lg:text-5xl mb-8 font-bold relative dark:text-whiteColor">
            تسجيل الدخول
            <span className=" text-yellowColor">.</span>
          </h2>
          <p className=" text-2xl font-thin dark:text-whiteColor">
            ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
          </p>
          <form
            action=""
            className=" w-100% relative h-1/2 flex justify-center text-right flex-col"
            data-aos="zoom-out"
          >
            <div className=" form__div">
              <input
                type="tel"
                placeholder=""
                required
                className="form__input"
              />
              <label htmlFor="" className="form__label">
                رقم الهاتف
              </label>
            </div>
            <div className="form__div">
              <input
                type="password"
                className="form__input"
                placeholder=" "
                required
              />
              <label htmlFor="" className="form__label">
                كلمه السر
              </label>
            </div>
          </form>
          <div className=" flex mt-5 flex-row items-center gap-6">
            <p className=" dark:text-whiteColor">لا يوجد لديك حساب؟</p>
            <Link to={"/register"} className=" btn px-2">
              {" "}
              انشئ حسابك الان !{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
