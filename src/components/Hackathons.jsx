import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  certificate,
  cert,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl flex flex-col justify-between min-h-[300px] md:w-[48%] sm:w-[100%] max-w-[450px] min-w-[300px]"
    >
      <p className="text-white font-black text-[28px]">{company}</p>

      <div className="mt-1 flex-grow">
        {testimonial.split("\n").map((line, index) => (
            <span key={index} className="text-white tracking-wider text-[18px] block">
        {line}
      </span>
        ))}
      </div>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">{name}</p>
          <p className="mt-1 text-secondary text-[12px]">{designation}
              { cert ? " - " : "" }
              <a href={certificate} target={"_blank"} className={`blue-text-gradient underline decoration-blue-500`}> {cert} </a>
          </p>
        </div>
          <img
            src={image}
            alt={`Logo`}
            className="w-[80px] h-[80px] object-cover"
        />
      </div>
    </motion.div>

);

const Hackathons = () => {
  return (
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
            className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>My impact</p>
            <h2 className={`${styles.sectionHeadText} text-center`}>Hackathons</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-6 justify-center max-w-[1100px] mx-auto`}>
          {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
  );
};

export default SectionWrapper(Hackathons, "");
