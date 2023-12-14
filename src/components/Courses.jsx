import coursePhoto from "../assets/webdev.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section className="courses relative md:px-12 sm:px-5">
      <h1 className=" dark:text-whiteColor w-full text-right text-5xl mb-8 md:text-center">
        احدث <span className="style"> الكورسات </span>
      </h1>
      <div className=" grid-container sm:flex sm:items-center sm:justify-center sm:flex-col">
        <div className=" sm:w-full w-full relative drop-shadow-2xl border border-boxBorder  overflow-hidden text-right p-2 rounded-lg">
          <img
            src={coursePhoto}
            alt="coursePhoto.jpeg"
            className=" w-full h-72 rounded-lg object-cover bg-cover bg-center hover:scale-110 ease-linear duration-300"
          />
          <h3 className=" text-3xl md:text-2xl mt-3 dark:text-whiteColor">
            برمجه المواقع الإلكترونيه
          </h3>
          <p className="mt-3  dark:text-whiteColor">
            تطوير الويب هو عملية إنشاء وتطوير مواقع الويب وتطبيقات الويب. يتضمن
            هذا العمل إنشاء تصميم جذاب وواجهة مستخدم سهلة الاستخدام وبرمجة
            وتطوير الجزء الخلفي من الموقع أو التطبيق. يعتمد تطوير الويب على
            مجموعة من اللغات والتقنيات مثل HTML وCSS وJavaScript وPHP وقواعد
            البيانات.
          </p>
          <Link
            to={"/course/webDevelopment"}
            className=" btn px-5 flex justify-center mt-3 items-center"
          >
            الدخول للكورس
          </Link>
        </div>
        <div className=" sm:w-full w-full relative drop-shadow-2xl border border-boxBorder  overflow-hidden text-right p-2 rounded-lg">
          <img
            src={coursePhoto}
            alt="coursePhoto.jpeg"
            className=" w-full h-72 rounded-lg object-cover bg-cover bg-center hover:scale-110 ease-linear duration-300"
          />
          <h3 className=" text-3xl md:text-2xl mt-3 dark:text-whiteColor">
            برمجه المواقع الإلكترونيه
          </h3>
          <p className="mt-3  dark:text-whiteColor">
            تطوير الويب هو عملية إنشاء وتطوير مواقع الويب وتطبيقات الويب. يتضمن
            هذا العمل إنشاء تصميم جذاب وواجهة مستخدم سهلة الاستخدام وبرمجة
            وتطوير الجزء الخلفي من الموقع أو التطبيق. يعتمد تطوير الويب على
            مجموعة من اللغات والتقنيات مثل HTML وCSS وJavaScript وPHP وقواعد
            البيانات.
          </p>
          <Link
            to={"/course/courseId"}
            className=" btn px-5 flex justify-center mt-3 items-center"
          >
            الدخول للكورس
          </Link>
        </div>
        <div className=" sm:w-full w-full relative drop-shadow-2xl border border-boxBorder  overflow-hidden text-right p-2 rounded-lg">
          <img
            src={coursePhoto}
            alt="coursePhoto.jpeg"
            className=" w-full h-72 rounded-lg object-cover bg-cover bg-center hover:scale-110 ease-linear duration-300"
          />
          <h3 className=" text-3xl md:text-2xl mt-3 dark:text-whiteColor">
            برمجه المواقع الإلكترونيه
          </h3>
          <p className="mt-3  dark:text-whiteColor">
            تطوير الويب هو عملية إنشاء وتطوير مواقع الويب وتطبيقات الويب. يتضمن
            هذا العمل إنشاء تصميم جذاب وواجهة مستخدم سهلة الاستخدام وبرمجة
            وتطوير الجزء الخلفي من الموقع أو التطبيق. يعتمد تطوير الويب على
            مجموعة من اللغات والتقنيات مثل HTML وCSS وJavaScript وPHP وقواعد
            البيانات.
          </p>
          <Link
            to={"/course/courseId"}
            className=" btn px-5 flex justify-center mt-3 items-center"
          >
            الدخول للكورس
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
