import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const Login = () => {
  useEffect(() => {
    Aos.init({
      // Global settings (optional)
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Only once on scroll
    });
  }, []);
  return (
    <section className=" relative bg-blend-darken h-screen p-24 login-section md:px-10">
      <div className=" flex items-center justify-center lg:justify-center z-50">
        <div className=" text-right h-[70vh] w-[25rem] z-10 box blur-box relative top-10 overflow-hidden flex flex-col py-12">
          <h2 className=" z-10 text-5xl lg:text-4xl md:text-3xl mb-8 font-bold relative dark:text-whiteColor">
            تسجيل الدخول
            <span className=" text-yellowColor">.</span>
          </h2>
          <p className=" z-10 text-xl md:text-lg sm:text-base font-thin dark:text-whiteColor">
            ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
          </p>
          <form
            action=""
            className=" w-full z-10 relative h-2/5 flex justify-center text-right flex-col"
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
          <div className=" flex mt-5 flex-row z-10 items-center gap-6 sm:flex-col">
            <p className=" dark:text-whiteColor sm:text-base">
              لا يوجد لديك حساب؟
            </p>
            <Link to={"/register"} className=" btn px-2">
              انشئ حسابك الان !
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
