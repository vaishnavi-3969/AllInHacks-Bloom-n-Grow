import React from 'react'
import { FaGithub, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Bloom & Grow Community</p>
          <div className="flex items-center">
            <a href="https://github.com/vaishnavi-3969/AllInHacks-Bloom-n-Grow" className="mr-4">
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a href="https://devpost.com/software/bloom-n-grow" className="mr-4">
              <FaCode className="text-lg" />
              <span>Devpost</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer