import React from "react";
import noumannawaz from "../assets/images/nouman-nawaz.png";
import About from "./About";
import { Button, ButtonTwo } from "./Button";
import Deliveries from "./Deleiveries";
import Portfolio from "./Portfolio";
import Slider from "./Slider";

export function Home() {
  return (
    <div className="relative w-full bg-white dark:bg-gray-800 mt-20">
      <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row md:justify-between">
        <div className="flex flex-col justify-end md:py-16 lg:mb-20 items-start sm:w-[50%] w-full">
          <h1 className="sm:mt-1 xl:mt-15  text-[1.7rem] text-start font-bold tracking-tight text-black/50 md:text-4xl lg:text-5xl dark:text-white/50 sm:text-3xl mt-10 ">
            Hello! my name is{" "}
            <span className="text-black dark:text-white underline">Nouman Nawaz </span> & I
            am a
            <span className=" text-black dark:text-white underline">
              {" "}
              Front-end web  Developer.
            </span>
          </h1>
          <p className="text-start text-black dark:text-gray-100  my-5 text-xl italic">
            " I help <strong>start-ups</strong> and <strong>companies</strong>{" "}
            to build beautiful and interactive <strong>web aplications.</strong>{" "}
            "
          </p>

          <div className="flex gap-x-2">
            {" "}
            <Button /> <ButtonTwo />
          </div>
        </div>

        <div className="sm:w-[40%] w-full">
          <img className="w-[100%] mx-auto" src={noumannawaz} alt="" />
        </div>
      </div>

      {/* What you will got from me */}
      <Deliveries />

      {/* Portfolio */}
      <Portfolio />

      {/* About section */}

      <About />

      {/* <Slider /> */}
    </div>
  );
}
