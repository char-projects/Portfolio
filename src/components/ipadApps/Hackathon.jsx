import React from "react";
import {testimonials} from "../../constants/index.js";

const FeedbackCard = ({
                          testimonial,
                          name,
                          designation,
                          company,
                          image,
                          certificate,
                          cert,
                      }) => (
    <div
        className="bg-black-200 p-10 rounded-3xl mx-5 mt-5"
    >
        <p className="text-white font-black text-[28px]">{company}</p>
        <div>
            {testimonial.split("\n").map((line, index) => (
                <span key={index} className="text-white tracking-wider text-[18px] block">
        {line}
      </span>
            ))}
        </div>

        <div className="mt-5 flex justify-between items-center">
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
    </div>

);

const Hackathons = () => {
    return (
        <>
        <div className={`bg-tertiary rounded-3xl mx-5 mt-4 py-4`}>
            <div className="text-3xl text-center font-bold">
                <h2>Hackathons</h2>
            </div>
        </div>
        <div>
            {testimonials.map((testimonial, index) => (
                <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
        </div>
        </>
    );
};

export default Hackathons;
