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
            className="flex border-2 rounded-md border-black dark:border-white items-center flex-col justify-between px-4 py-2 sm:w-[calc(100%/3-10px)] m-[5px] shrink-0 w-[calc(100%/1-40px)] "
          >
            <img src={skill.image} className="w-full rounded-md " alt="" />
            <h1 className="text-2xl font-bold text-Black dark:text-white mt-6">{skill.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
