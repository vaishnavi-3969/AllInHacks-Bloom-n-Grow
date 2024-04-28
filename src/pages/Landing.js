import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { RotatingFlowers, flower1, flower10, flower11, flower12, flower13, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9 } from '../assets/images';

const Landing = ({ loginWithPopup }) => {

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-[#344E41] text-white min-h-screen flex flex-col justify-center items-center"
      >
        <div className="justify-center max-w-3xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='flex items-center'
          >
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Welcome to Bloom & Grow Community
            </h1>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-[300px] ml-4 p-10"
            >
              <img src={RotatingFlowers} alt="Rotating flowers" />
            </motion.div>
          </motion.div>
          <p className="mb-8 text-lg md:text-xl">
            Join our vibrant community of plant lovers, where you can connect, learn, and grow together.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center mb-12"
          >
            <button
              onClick={loginWithPopup}
              className="bg-[#D4A373] hover:bg-[#6c584c] text-black hover:text-white text-lg md:text-xl font-bold py-2 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
            <button
              onClick={loginWithPopup}
              className="px-6 py-2 text-lg font-bold transition duration-300 ease-in-out transform bg-transparent border-2 border-white rounded-full hover:border-green-500 md:text-xl hover:scale-105"
            >
              Log In
            </button>
          </motion.div>
          <p className="text-lg md:text-xl">
            Not sure where to start? Explore our{' '}
            <button onClick={loginWithPopup} className="underline">
              community gardens
            </button>{' '}
            or visit our{' '}
            <button onClick={loginWithPopup} className="underline">
              marketplace
            </button>{' '}
            for sustainable gardening products.
          </p>
          <p className="mt-8 text-sm text-gray-300">
            Already a member?{' '}
            <button onClick={loginWithPopup} className="underline">
              Log in here
            </button>
          </p>
        </div>
      </motion.div>
      <div className='flex items-center justify-center overflow-hidden text-center'>
        <img src={flower1} alt='flower' className='w-[100px] h-auto' />
        <img src={flower2} alt='flower' className='w-[100px] h-auto' />
        <img src={flower3} alt='flower' className='w-[100px] h-auto' />
        <img src={flower4} alt='flower' className='w-[100px] h-auto' />
        <img src={flower5} alt='flower' className='w-[100px] h-auto' />
        <img src={flower6} alt='flower' className='w-[100px] h-auto' />
        <img src={flower7} alt='flower' className='w-[100px] h-auto' />
        <img src={flower8} alt='flower' className='w-[100px] h-auto' />
        <img src={flower9} alt='flower' className='w-[100px] h-auto' />
        <img src={flower10} alt='flower' className='w-[100px] h-auto' />
        <img src={flower11} alt='flower' className='w-[100px] h-auto' />
        <img src={flower12} alt='flower' className='w-[100px] h-auto' />
        <img src={flower13} alt='flower' className='w-[100px] h-auto' />
      </div>
      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="p-4 text-center bg-[#DAD7CD] text-[#344E41]"
      >
        <h2 className="mb-4 text-3xl font-bold">About Bloom N Grow</h2>
        <p>
          "Bloom N Grow" is an innovative gardening platform that aims to empower communities in Africa to maintain and nurture their gardens, promoting sustainability and environmental well-being.
        </p>
      </motion.section>
      {/* Mission Section */}
      <motion.section
        id="mission"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="p-4 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
        <p>
          Our mission is to provide accessible and comprehensive gardening resources, enabling individuals and communities to cultivate thriving gardens, fostering a greener and healthier environment while promoting food security and self-sufficiency.
        </p>
      </motion.section>
      {/* Features Section */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="p-4 text-center bg-[#DAD7CD] text-[#344E41]"
      >
        <h2 className="mb-4 text-3xl font-bold">Our Features</h2>
        <ul className="list-disc list-inside">
          <li>User Profile: Personalize your experience and interact with the community.</li>
          <li>Garden Planner: Plan and manage your garden with ease.</li>
          <li>Community Forum: Engage with fellow gardening enthusiasts.</li>
          <li>Crops Calendar: Keep track of planting and harvesting times.</li>
          <li>Community Gardens: Participate in community gardening events.</li>
          <li>Marketplace: Buy and sell gardening supplies.</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Landing;