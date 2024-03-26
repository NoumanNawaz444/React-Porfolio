import React from "react";
import { Skills } from "./Skills";
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
    <div className="relative isolate overflow-hidden bg-gray-100 dark:bg-gray-900 py-12 sm:py-32 sm:mt-15 mt-10 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-start">
            Skills
          </h2>
          <p className="mt-6 text-lg leading-8 text-black text-start text-xl  dark:text-white">
            Here are the Technoligies I am familiar with :
          </p>
        </div>

        <Skills />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-8 max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-start">
            Education
          </h2>
          <p className="mt-6 text-lg leading-8 text-black text-start text-xl  dark:text-white">
            I have completed my Metriculation level from SSCG(Scholar Science
            Cadet Ghakar) & my Intermediate from Aspire College Wazirabad.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((edu) => (
              <div
                key={edu.name}
                className="flex flex-col-reverse  py-10 rounded-lg backdrop-blur-lg border-2 border-black  dark:border-gray-100 hover:bg-green-600 cursor-pointer duration-100 hover:translate-y-[-10px]"
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
        </div>
      </div>
    </div>
  );
}
