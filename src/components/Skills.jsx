import React from "react";

export function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/s-card-1.png",
    },
    {
      id: 2,
      name: "CSS",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/s-card-2.png",
    },
    {
      id: 3,
      name: "Javascript",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/s-card-3.png",
    },
    {
      id: 4,
      name: "React",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/s-card-4.png",
    },
    {
      id: 5,
      name: "Bootstrap",
      image:
        "https://noumannawaz444.github.io/Portfolio/assets/images/s-card-5.png",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      image:
        "https://th.bing.com/th/id/OIP.il7OVjRoWgGerc29hxihMgHaEK?rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div className="flex sm:flex-wrap flex-nowrap  w-full rounded-md overflow-x-scroll">
      {skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="flex border-2 rounded-md border-black/20 dark:border-white/20 items-center flex-col justify-between px-4 py-3  sm:w-[calc(100%/3-20px)] sm:m-[10px] m-1 shrink-0 w-[calc(100%/1-40px)] shadow-md bg-white/30 backdrop-blur-sm dark:bg-black/30 "
          >
            <img src={skill.image} className="w-full rounded-md dark:bg-black/20 bg-white/20" alt="" />
            <h1 className="text-2xl font-bold text-Black dark:text-white mt-6">
              {skill.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
