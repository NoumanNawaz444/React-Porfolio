import React from "react";
import useTheme from "../context/themeContext";
import dayNight from '../assets/images/day-night.gif'

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const changeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={changeBtn}
        checked={themeMode === "dark"}
      />
      {/* <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
      <img 
      src={dayNight} 
      className="h-[35px] w-[35px] bg-transparent rounded-full dark:invert"
      alt="day-night" />


      <span className="ml-3 text-gray-700 dark:text-gray-300 hidden sm:flex">
        {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
