import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {menu, close, profile_pic} from "../assets";
import ThemeButton from "./Theme.jsx";
import {slideIn} from "../utils/motion.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
          className={`${
              styles.paddingX
          } w-full flex items-center py-5 fixed top-0 z-20 ${
              scrolled ? "bg-primary" : "bg-transparent"
          }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
          >
            <img src={profile_pic} alt='profile_pic' className='w-9 h-9 rounded-full object-cover' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Charlotte
              <span className='sm:block hidden'>'s Portfolio</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
                <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle(!toggle)}
            />

            <motion.div
                variants={slideIn("right", "tween", 0, 0.3)}
                initial="hidden"
                whileInView="show"
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 bg-gray-700 border border-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === nav.title
                                ? "text-secondary"
                                : "dark:text-ctnPrimaryDark text-ctnPrimaryLight"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
              ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;