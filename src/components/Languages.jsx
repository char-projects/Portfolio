import handleViewport from "react-in-viewport";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import React from "react";

const techData = [
    { id: 1, name: "German", proficiency: "Native", width: "w-[100%]" },
    { id: 2, name: "English", proficiency: "C2", width: "w-[95%]" },
    { id: 3, name: "Spanish", proficiency: "C2", width: "w-[95%]" },
    { id: 4, name: "Portuguese", proficiency: "B2", width: "w-[70%]" },
    { id: 5, name: "Latin", proficiency: "Latinum", width: "w-[60%]" },
    { id: 6, name: "Polish", proficiency: "B1", width: "w-[50%]" },
    { id: 7, name: "Russian", proficiency: "A2", width: "w-[30%]" },
];

const TechBar = ({ inViewport, forwardedRef, h2, p, width }) => {
    return (
        <>
            <div className={"px-6 sm:px-12 md:px-24 lg:px-48 max-w-7xl w-full"}>
                <div className="mt-8 flex justify-between items-center" ref={forwardedRef}>
                    <h2 className="font-semibold">{h2}</h2>
                    <p className="text-gray-200">{p}</p>
                </div>
                <span className={`${width} h-[12px] mt-2 bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-fuchsia-200 block rounded-md transition-all duration-[2500ms] ease-in-out }`} />
            </div>
        </>
    );
};

const ViewportTechBar = handleViewport(TechBar);

const Languages = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Available in the following
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Languages
                </h2>
            </motion.div>
        <div className="flex flex-col items-center w-full">
            {techData.map((tech) => (
                <ViewportTechBar key={tech.id} h2={tech.name} p={tech.proficiency} width={tech.width} />
            ))}
        </div>
        </>
    );
}

export default SectionWrapper(Languages, "");