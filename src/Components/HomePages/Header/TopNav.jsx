"use client";

import {
  BiPhoneCall,
  BiEnvelope,
  BiSolidMap,
  BiLogoFacebookCircle,
} from "react-icons/bi";

import { AiFillLinkedin, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="hidden lg:block bg-brand-dark-bg">
      <div className="container max-w-7xl mx-auto px-4 ">
        <div className="lg:flex justify-between items-center py-3">
          <div className="flex justify-between lg:gap-5 md:gap-3 items-center text-brand-text dark:text-brand-dark-title">
            <Link
              to="tel:+8801322810882"
              className="flex justify-center items-center gap-2 text-lg tracking-wider dark:text-white"
            >
              <BiPhoneCall className="w-6 h-6 text-brand-secondary" />
              (+88) 01322810882
            </Link>
            <Link
              to="https://web.programming-hero.com/"
              className="text-lg flex justify-center items-center gap-2"
            >
              <BiEnvelope className="w-7 h-7 text-brand-secondary" />
              web.programming-hero.com
            </Link>
            <address className="text-lg flex justify-center items-center gap-2">
              <BiSolidMap className="w-7 h-7 text-brand-secondary" />
              Level-4, 34, Awal Centre, Banani, Dhaka
            </address>
          </div>
          <div className="right ">
            <ul className="flex justify-between gap-4">
              <motion.li
                className="bg-brand-secondary p-1.5 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a
                  href="https://www.facebook.com/programmingherowebcourse"
                  target="blank"
                >
                  <BiLogoFacebookCircle
                    size={17}
                    className="hover:text-brand-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                className="bg-brand-secondary p-1.5 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a href="https://www.linkedin.com/company/programminghero/">
                  <AiFillLinkedin
                    size={17}
                    className="hover:text-brand-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                className="bg-brand-secondary p-1.5 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a href="https://www.instagram.com/programminghero/">
                  <AiFillInstagram
                    size={17}
                    className="hover:text-brand-primary"
                  />
                </a>
              </motion.li>
              <motion.li
                className="bg-brand-secondary p-1.5 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a
                  href="https://www.youtube.com/c/ProgrammingHeroCommunity"
                  target="blank"
                >
                  <AiFillYoutube
                    size={17}
                    className="hover:text-brand-primary "
                  />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
