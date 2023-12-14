import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const LogOut = () => {
  useEffect(() => {
    Aos.init({
      // Global settings (optional)
      duration: 1000, // Animation duration
      easing: "ease", // Easing function
      once: true, // Only once on scroll
    });
  }, []);
  return (
    <section className=" pt-32 bg-register">
      <div className=" flex items-center justify-center ">
        <div className=" text-right flex flex-col">
          <h2 className=" text-4xl mb-6 lg:text-3xl font-bold dark:text-whiteColor">
            انشئ <span className=" text-aboutSectionColor">حسابك الآن:</span>
          </h2>
          <p className=" text-2xl md:text-xl dark:text-whiteColor mb-6 font-thin">
            ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع
          </p>
          <form
            action=""
            className=" grid grid-cols-2 box relative gap-2 text-right"
            data-aos="zoom-out"
          >
            <div className=" form__div">
              <input
                required
                type=" text"
                placeholder=""
                className="form__input"
              />
              <label htmlFor="" className="form__label">
                الأسم الثاني
              </label>
            </div>
            <div className="form__div">
              <input
                required
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label">
                الأسم الأول
              </label>
            </div>
            <div className="form__div">
              <input
                required
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label">
                رقم هاتف ولي الأمر
              </label>
            </div>
            <div className="form__div">
              <input
                required
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label">
                رقم الهاتف
              </label>
            </div>
            <div className="form__div row-start-3 col-start-1 row-end-3 col-end-3">
              <input
                required
                type="email"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label ">
                البريد الإلكتروني
              </label>
            </div>
            <div className="form__div">
              <input
                required
                type="password"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label">
                تأكيد كلمه السر
              </label>
            </div>
            <div className="form__div">
              <input
                required
                type="password"
                className="form__input"
                placeholder=" "
              />
              <label htmlFor="" className="form__label ">
                كلمه السر
              </label>
            </div>
            <button
              type="submit"
              className="btn row-start-5 col-start-1 row-end-5 col-end-2 sm:text-sm "
            >
              انشئ الحساب
            </button>
          </form>
          <div className=" flex mt-5 blur-box flex-row items-center gap-6">
            <p className=" bg-whiteColor px-4 py-2 rounded-lg dark:text-whiteColor dark:bg-secondColor md:text-base sm:text-sm">
              يوجد لديك حساب بالفعل؟
            </p>
            <Link
              to={"/login"}
              className=" text-lightBlueColor bg-blackColor dark:bg-whiteColor rounded-lg px-4 py-2 md:text-base sm:text-sm"
            >
              ادخل إلى حسابك الآن!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogOut;
