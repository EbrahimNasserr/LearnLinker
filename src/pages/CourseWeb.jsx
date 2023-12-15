import coursePhoto from "../assets/web.webp";
import frontPhoto from "../assets/frontendRoad.webp";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import react from "../assets/react.jpg";
import javascript from "../assets/javascript.jpg";
import backend from "../assets/backend.webp";
import node from "../assets/node.jpg";
import php from "../assets/php.jpg";
import python from "../assets/python.jpg";

const CourseDetails = () => {
  return (
    <>
      <section>
        <div className=" flex items-center">
          <div className=" w-full h-[90%] flex z-20 flex-row lg:flex-col relative gap-8 lg:h-[110%] justify-center bg bg-[#334155] overflow-hidden bg-blend-soft-light p-16 sm:p-5 mt-10 rounded-3xl">
            <div className=" absolute top-0 left-0 w-full h-full bg-gradient -z-10"></div>
            <h1 className=" font-bold text-5xl md:text-4xl text-whiteColor sm:text-3xl">
              Web Development
            </h1>
          </div>
        </div>
        <div className=" px-16 md:px-3 py-5">
          <div className="  flex flex-row justify-center items-center md:flex-col-reverse">
            <div className=" md:relative md:bottom-10 flex flex-col">
              <img
                src={coursePhoto}
                alt="coursePhoto.jpeg"
                className=" w-full h-[450px] rounded-lg object-cover bg-cover bg-center shadow-lg "
              />
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full  overflow-hidden text-right shadow-lg p-10 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-right text-3xl md:text-lg font-bold mb-8">
                  مسار الواجهة الأمامية & دورات لتعلم الواجهة الأمامية
                </h1>
                <p className=" font-thin text-lg dark:text-whiteColor">
                  ركز على الصناديق الصفراء. يوجد أسفل الخريطة موارد إضافية
                  لمساعدتك في التعلم
                </p>
              </div>
              <img
                src={frontPhoto}
                alt="img/png"
                className=" py-5 rounded-lg"
              />
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  Html
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji&pp=iAQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={html} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  CSS
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe&pp=iAQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={css} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  JavaScript
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&pp=iAQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={javascript} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  React
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=p8nOfP2fw24&list=PLQtNtS-WfRa9LbmD8ON7rWhn-AtKTGdkn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={react} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full  overflow-hidden text-left shadow-lg p-10 rounded-lg">
                <h1 className=" dark:text-whiteColor justify-center items-center flex w-full text-3xl md:text-lg font-bold mb-8">
                  Backend
                </h1>
                <p className=" font-thin text-lg flex justify-center items-center dark:text-whiteColor">
                  ركز على الصناديق الصفراء وانطلق من هناك. يوجد أسفل الخريطة
                  موارد إضافية للمساعدة في تعلمك.
                </p>
              </div>
              <img src={backend} className="py-5 rounded-lg" alt="" />
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  Node.js
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&pp=iAQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={node} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  Php
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=xcg9qq6SZ0w&list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={php} className=" w-48 h-40" alt="" />
                </a>
              </div>
              <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-3 rounded-lg">
                <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                  Python
                </h1>
                <a
                  href="https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
                >
                  <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                    <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                    Watch the course
                  </div>
                  <img src={python} className=" w-48 h-40" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
