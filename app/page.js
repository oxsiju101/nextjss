"use client";
import Image from "next/image";
import oxsju from "../public/oxsju.jpg";

export default function Projects() {
  return (
    <>
      <div className="w-full h-full bg-gray-900 dark:bg-gray-200">
        <div className="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
          <div className="w-full relative">
            <Image
              className="shadow-2xl  animate-none absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
              src={oxsju}
              alt="My Image"
            />
          </div>
          <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4"></div>
          <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
              Hello, My name is oluwatobiloba samuel{" "}
            </h1>
            <h3 className="capitalize text-rose-400">
              i'm{" "}
              <span className="typing text-green-500 dark:text-green-700">
                Front end developer
              </span>
            </h3>
            <p>
              Experienced front-end developer with 0+ years of expertise in
              Next.js, React.js, and Tailwind CSS. Proficient in building
              responsive and user-friendly web applications. Passionate about
              creating seamless user experiences.
            </p>
            <div className="sm:mt-4 mt-2">
              <button
                className="px-6 py-1 bg-rose-500 text-white rounded-sm"
                onClick={() => {
                  window.location.href = "mailto:bamysiju@gmail.com";
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
