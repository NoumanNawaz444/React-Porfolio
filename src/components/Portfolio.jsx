import React from "react";
import TopBanner from "./TopBanner";

export default function Portfolio() {
  const Portfolio = [
    {
      title: "Project Tom",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/project-tom.png",
      live: "https://noumannawaz444.github.io/Project-Tom/",
    },
    {
      title: "Oddyssey Transports",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/card-2.jpg",
      live: "https://noumannawaz444.github.io/Oddyssey-Transport/",
    },
    {
      title: "Manchester Airlines",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/card-3.png",
      live: "https://noumannawaz444.github.io/Manchester-Airline/",
    },
    {
      title: "Marketing Agency",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/card-4.jpg",
      live: "https://noumannawaz444.github.io/Marketing-Web/",
    },
    {
      title: "Veller Sports",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/card-1.jpg",
      live: "https://noumannawaz444.github.io/VSI/",
    },
  ];

  return (
    <div className="flex flex-col mt-10">
      <TopBanner
        name="PortFolio"
        description="Here are some of my recent work :"
        className="sm:my-4  sm:mt-20"
      />

      <div className="flex sm:flex-wrap overflow-x-scroll  justify-start bg-black/30 dark:bg-white/30 rounded-lg sm:p-10 p-2">
        {Portfolio.map((item) => (
          <div
            key={item.title}
            className="rounded-md  p-4 md:w-[calc(100%/3-20px)] sm:w-[calc(100%/2-20px)]  w-[calc(100%/1-40px)] sm:m-[10px] m-1  bg-white/30  dark:bg-black/30 backdrop-blur-sm border-2 border-black/20 dark:border-white/20 shrink-0"
          >
            <img src={item.image} alt="Laptop" className="w-full rounded-md" />
            <div className="p-4">
              <h1 className="inline-flex items-center text-xl font-bold text-black dark:text-white">
                {item.title}
              </h1>
              <div className="mt-4">
                <span className="mb-2 inline-block dark:bg-gray-700 dark:text-white  rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #HTML
                </span>
                <span className="mb-2 mx-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 dark:text-white px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #CSS
                </span>
                <span className="mb-2 inline-block rounded-full dark:bg-gray-700 dark:text-white  bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #JavaScript
                </span>
              </div>
              <a
                type="button"
                href={item.live}
                target="_blank"
                className="mt-4 w-full  bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black rounded-md dark:hover:bg-white/80"
              >
                Go Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
