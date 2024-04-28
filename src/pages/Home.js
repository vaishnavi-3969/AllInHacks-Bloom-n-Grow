import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSeedling } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { flower1, flower10, flower11, flower12, flower13, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9 } from '../assets/images';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container min-h-screen py-8 mx-auto">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Welcome to Bloom & Grow Community</h1>
        <p className="text-lg md:text-xl">
          Your go-to platform for all things related to sustainable gardening and community building.
        </p>
      </div>

      {isAuthenticated && (
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
          <Link to="/marketplace" className="bg-[#A3B18A] text-white p-6 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105">
            <FaShoppingCart className="text-3xl" />
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">Explore Marketplace</h2>
              <p>Discover eco-friendly products for your gardening needs.</p>
            </div>
          </Link>
          <Link to="/community" className="bg-[#588157] text-white p-6 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105">
            <FaSeedling className="text-3xl" />
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">Join Community</h2>
              <p>Connect with like-minded individuals, share experiences, and learn from each other.</p>
            </div>
          </Link>
        </div>
      )}

      {!isAuthenticated && (
        <div className="px-3 mt-8 text-center">
          <p className="text-lg md:text-xl">
            Ready to start your sustainable journey?{' '}
            <Link to="/marketplace" className="underline">Explore our Marketplace</Link> or{' '}
            <Link to="/community" className="underline">Join our Community</Link>.
          </p>
        </div>
      )}

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

export default Home;
