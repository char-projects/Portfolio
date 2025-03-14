import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";
import { arrow } from "../assets";

const Footer = () => {

    return (
        <div className="sm:px-16 px-6 sm:py-6 py-3 min-h-[100px] mt-6">
            <div className="flex justify-center items-center">
                <Link
                    to="/"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                </Link>
                <p className="text-secondary text-[17px] leading-[30px] text-center select-none">
                    {new Date().getFullYear()} &copy; Created by Charlotte. All rights reserved.
                </p>
            </div>
            <div className="w-full h-auto flex justify-center bg-fuchsia-300 bg-clip-text text-transparent font-bold self-start text-2xl">
                <Typewriter
                    text={[
                        "Thanks for visiting!",
                        "Come back soon!",
                        "<Love to code/>",
                    ]}
                    loop
                    speed={70}
                    cursor={false}
                />
            </div>
        </div>
    );
};

export default Footer;