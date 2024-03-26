import React from "react";

function TopBanner(props) {
  return (
    <div className={`relative isolate overflow-hidden ${props.className}  py-12  sm:mt-15 mt-20 rounded-lg bg-black/20 dark:bg-white/20 mb-10`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-start">
            {props.name}
          </h2>
          <p className="mt-6 leading-8 text-black text-start text-xl  dark:text-white">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
