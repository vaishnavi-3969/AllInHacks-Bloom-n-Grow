import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { motion } from 'framer-motion';
import { HandingFlowers } from '../assets/images';

const Landing = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#344E41] min-h-screen text-white flex flex-col justify-center items-center"
      >
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Bloom &amp; Grow Community
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our vibrant community of plant lovers, where you can connect, learn, and grow together.
          </p>
          <div className="flex justify-center mb-12">
            <button
              onClick={() => loginWithPopup()}
              className="bg-[#D4A373] hover:bg-[#6c584c] text-black hover:text-white text-lg md:text-xl font-bold py-2 px-6 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
            <button
              onClick={() => loginWithPopup()}
              className="bg-transparent border-2 border-white hover:border-green-500 text-lg md:text-xl font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Log In
            </button>
          </div>
          <p className="text-lg md:text-xl">
            Not sure where to start? Explore our{' '}
            <button onClick={() => loginWithPopup()} className="underline">
              community gardens
            </button>{' '}
            or visit our{' '}
            <button onClick={() => loginWithPopup()} className="underline">
              marketplace
            </button>{' '}
            for sustainable gardening products.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;