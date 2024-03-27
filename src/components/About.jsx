import React from "react";
import { Skills } from "./Skills";
import TopBanner from "./TopBanner";
const education = [
  {
    name: "SSCG",
    degree: "Metriculation Level",
    field: "Computer Science",
  },
  {
    name: "Aspire College Wazirabad",
    degree: "ICS",
    field: "Computer Science",
  },
  {
    name: "It Skills",
    degree: "Website Development",
    field: "Computer Science",
  },
];

export default function About() {
  return (
    <>
      <TopBanner
        name="Skills"
        description=" Here are the Technologies I am familiar with :"
        className="mt-[100px] mb-0"
      />
      <div className="relative isolate overflow-hidden bg-black/20 dark:bg-white/20 sm:mt-4 mt-2 rounded-lg sm:py-10 py-2 px-2">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Skills />
        </div>
      </div>

      {/* <TopBanner
        name="Education"
        description="I have completed my Metriculation level from SSCG(Scholar Science
            Cadet Ghakar) & my Intermediate from Aspire College Wazirabad."
        className="sm:my-10 mb-0 "
      />
      <div className="  mx-auto lg:mx-0 lg:max-w-none bg-black/20 rounded-lg dark:bg-white/20">
        <dl className=" flex justify-between sm:my-4 my-2 sm:p-10  py-5 px-3 w-full sm:flex-wrap overflow-x-scroll">
          {education.map((edu) => (
            <div
              key={edu.name}
              className="flex flex-col-reverse  py-10 rounded-lg backdrop-blur-lg border-2 border-black/40  dark:border-white/20 hover:bg-green-600 cursor-pointer duration-100 sm:w-[calc(100%/2-20px)] w-[calc(100%/1-30px)] shrink-0  sm:m-[10px] md:w-[calc(100%/3-20px)] bg-white/20 dark:bg-black/20 mx-1"
            >
              <dt className="text-base leading-7 text-black dark:text-white">
                {edu.name}
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-white w-auto">
                {edu.degree}
              </dd>
            </div>
          ))}
        </dl>
      </div> */}
    </>
  );
}
