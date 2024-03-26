import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Expertise in React",
    description:
      "With my extensive experience as a front-end developer specializing in React, I bring a deep understanding of modern web development practices and industry standards. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Quality Code",
    description:
      " I adhere to best coding practices, ensuring that the code I write is clean, efficient, and maintainable. This leads to a robust and reliable website.",
    icon: LockClosedIcon,
  },
  {
    name: "Responsive Design",
    description:
      " I create websites that are responsive and user-friendly, providing an optimal viewing experience across a wide range of devices from desktop computer monitors to mobile phones.",
    icon: ArrowPathIcon,
  },
  {
    name: "Continuous Support",
    description:
      "I believe in building relationships with my clients. Therefore, I provide continuous support and maintenance for your website even after the project completion.",
    icon: FingerPrintIcon,
  },
];

export default function Deliveries() {
  return (
    <div className="mt-10 rounded-md py-24 sm:py-32 bg-black/30 dark:bg-white/30 ">
      <div className="mx-auto max-w-7xl px-2 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            What you will got from me ?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="flex justify-start  sm:justify-center items-start sm:flex-wrap overflow-x-scroll">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative w-[calc(100%/1-40px)] sm:w-[calc(100%/2-20px)] sm:m-[10px] m-1 bg-white/30 dark:bg-black/30 backdrop-blur-sm border-2 border-black/20 dark:border-white/20 rounded-md sm:px-10 px-5  py-8 shrink-0  "
              >
                <dt className=" font-bold text-xl leading-7 text-black dark:text-white">
                  <div className="absolute left-2 top-2 h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-black  hidden sm:flex">
                    <feature.icon
                      className="h-6 w-6 text-black dark:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-black dark:text-white">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
