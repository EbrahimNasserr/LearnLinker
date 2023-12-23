import softwarephoto from "../assets/softwarecourse.png";
import javascript from "../assets/javascript.jpg";
import node from "../assets/node.jpg";
import cplusplus from "../assets/cplusplus.jpg";
import data from "../assets/dataStructre.jpg";
import algo from "../assets/algorithm.jpg";

const SoftwareCourse = () => {
  return (
    <section>
      <div className=" flex items-center">
        <div className=" w-full h-[90%] flex z-20 flex-row relative gap-8 lg:h-[110%] justify-center bg bg-[#334155] overflow-hidden bg-blend-soft-light p-16 sm:p-5 mt-10 rounded-3xl">
          <div className=" absolute top-0 left-0 w-full h-full bg-gradient -z-10"></div>
          <h1 className=" font-bold text-5xl md:text-4xl text-whiteColor sm:text-3xl">
            Software engineering
          </h1>
        </div>
      </div>
      <div className=" px-16 md:px-3 mt-5 py-5">
        <div className="  flex flex-row justify-center items-center md:flex-col-reverse">
          <div className=" md:relative md:bottom-10 flex flex-col">
            <img
              src={softwarephoto}
              alt="coursePhoto.jpeg"
              className=" w-full rounded-lg object-cover bg-cover bg-center shadow-lg "
            />
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full  overflow-hidden text-right shadow-lg p-10 rounded-lg">
              <h1 className=" dark:text-whiteColor w-full text-right text-3xl md:text-lg font-bold mb-8">
                مسار مهندس البرمجيات
              </h1>
              <p className=" font-thin text-2xl dark:text-whiteColor">
                تعلم لغات البرمجه
              </p>
            </div>
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-5 rounded-lg">
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
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-5 rounded-lg">
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
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-5 rounded-lg">
              <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                ++C
              </h1>
              <a
                href="https://www.youtube.com/watch?v=XDuWyYxksXU&list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&pp=iAQB"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
              >
                <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                  <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                  Watch the course
                </div>
                <img src={cplusplus} className=" w-48 h-40" alt="" />
              </a>
            </div>
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full  overflow-hidden shadow-lg p-10 rounded-lg">
              <h1 className=" dark:text-whiteColor w-full text-center text-3xl md:text-lg font-bold mb-8">
                تعلم هياكل البيانات والخوارزميات
              </h1>
            </div>
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-5 rounded-lg">
              <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                Data Structures
              </h1>
              <a
                href="https://www.youtube.com/watch?v=jGP19W5IObA&list=PL1DUmTEdeA6JlommmGP5wicYLxX5PVCQt"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
              >
                <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                  <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                  Watch the course
                </div>
                <img src={data} className=" w-48 h-40" alt="" />
              </a>
            </div>
            <div className="  dark:bg-primary-rgba mt-5 sm:w-full w-full text-left overflow-hidden shadow-lg p-5 rounded-lg">
              <h1 className=" dark:text-whiteColor w-full text-3xl font-bold mb-8">
                Algorithms
              </h1>
              <a
                href="https://www.youtube.com/watch?v=McifeJjrvpI&list=PLwCMLs3sjOY6KH-8c9F-lMWn-r02hyoV_"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex justify-between items-center flex-row-reverse dark:text-whiteColor dark:hover:text-primaryColor hover:text-primaryColor sm:text-lg transition-all text-3xl"
              >
                <div className=" flex items-center justify-center gap-3 flex-row-reverse">
                  <div className=" w-2 h-2 rounded-full bg-blackColor dark:bg-whiteColor"></div>
                  Watch the course
                </div>
                <img src={algo} className=" w-48 h-40" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCourse;
