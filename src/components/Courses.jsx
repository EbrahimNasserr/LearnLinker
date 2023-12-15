import coursePhoto from "../assets/webdev.jpg";
import softwarePhoto from "../assets/software.jpg";
import flutterPhoto from "../assets/fluttercourse.webp";
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
            src={softwarePhoto}
            alt="coursePhoto.jpeg"
            className=" w-full h-72 rounded-lg object-cover bg-cover bg-center hover:scale-110 ease-linear duration-300"
          />
          <h3 className=" text-3xl md:text-2xl mt-3 dark:text-whiteColor">
            هندسه البرمجيات
          </h3>
          <p className="mt-3 tracking-wider dark:text-whiteColor">
            الهندسة البرمجية هي علم وتطبيق للمبادئ والأساليب التي تستخدم لتطوير
            البرمجيات. تهدف الهندسة البرمجية إلى إنشاء برامج عالية الجودة وفعالة
            وقابلة للصيانة وقابلة للتوسع. تشمل العمليات الأساسية في الهندسة
            البرمجية تحليل المتطلبات، وتصميم البرمجيات، وتطويرها، واختبارها،
            وصيانتها.
          </p>
          <Link
            to={"/course/software"}
            className=" btn px-5 flex justify-center mt-3 items-center"
          >
            الدخول للكورس
          </Link>
        </div>
        <div className=" sm:w-full w-full relative drop-shadow-2xl border border-boxBorder  overflow-hidden text-right p-2 rounded-lg">
          <img
            src={flutterPhoto}
            alt="coursePhoto.jpeg"
            className=" w-full h-72 rounded-lg object-cover bg-cover bg-center hover:scale-110 ease-linear duration-300"
          />
          <h3 className=" text-3xl md:text-2xl mt-3 dark:text-whiteColor">
            برمجه تطبيقات الهاتف
          </h3>
          <p className="mt-3  dark:text-whiteColor">
            Flutter هو إطار عمل لتطوير تطبيقات الجوّال عبر المنصات المتعددة، تم
            تطويره من قِبَل جوجل. يسمح للمطورين ببناء تطبيقات جوّال عالية الأداء
            وجذابة بصريًا لنظامي التشغيل Android و iOS باستخدام قاعدة برمجية
            واحدة. يتمتع Flutter بميزة التطوير السريع والإنتاجية العالية
            وإمكانية إعادة تحميل الواجهة بشكل سريع وسلس، مما يتيح للمطورين
            اختبار وتجربة التغييرات بسرعة.
          </p>
          <Link
            to={"/course/flutter"}
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
