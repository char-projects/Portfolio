import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt
        className="xs:w-[250px] w-full"
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
    >
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full shadow-xl shadow-gray-500 p-[1px] rounded-[20px]"
        >
            <div className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-20 h-20 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >
          <p>
              I'm a full-stack developer with experience in C, Python,
              and JavaScript, specializing in system programming, algorithms, and
              data structures. I have a strong foundation in Unix, shell scripting,
              and low-level programming, along with front-end development
              using React and Tailwind CSS. With a background in marketing, I bring a
              problem-solving mindset and a user-focused approach to building efficient,
              scalable solutions.
          </p>
          <p>
              Let’s work together to bring your ideas to life!
          </p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
