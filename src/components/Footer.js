import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#344E41] py-4 text-white"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <p>&copy; 2024 Bloom & Grow Community</p>
          <div className="flex items-center">
            <a
              href="https://github.com/vaishnavi-3969/AllInHacks-Bloom-n-Grow"
              className="flex items-center mr-4 text-white transition duration-300 hover:text-green-500"
            >
              <FaGithub className="mr-1 text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href="https://devpost.com/software/bloom-n-grow"
              className="flex items-center mr-4 text-white transition duration-300 hover:text-green-500"
            >
              <FaCode className="mr-1 text-lg" />
              <span>Devpost</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
