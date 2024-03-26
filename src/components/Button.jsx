import React from "react";

export function Button() {
  return (
    <a
      href="https://www.upwork.com/freelancers/~010237c7e8287eedf7"
      target="_blank"
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white dark:text-black font-bold hover:bg-black/80 dark:bg-white dark:hover:bg-white/80 text-xl"
    >
      Hire Now
    </a>
  );
}

export function ButtonTwo() {
  return (
    <a
      href="https://www.upwork.com/freelancers/~010237c7e8287eedf7"
      target="_blank"
      type="button"
      className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-black dark:text-white bg-transparent border-2 border-black dark:border-white font-bold  text-xl"
    >
      Start a Contract
    </a>
  );
}
