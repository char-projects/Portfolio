import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
            <div className="relative w-28 h-28 group" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[80px] bg-bgPrimaryLight dark:bg-bgPrimaryDark text-ctnPrimaryLight dark:text-ctnPrimaryDark text-center text-xs rounded-lg py-1 px-2 z-10">
                {technology.name}
              </div>
            </div>
        ))}
      </div>
  );
};

export default SectionWrapper(Tech, "");
