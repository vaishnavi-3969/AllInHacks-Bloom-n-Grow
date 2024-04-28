import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { RotatingFlowers } from '../assets/images';

const Landing = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[#ffffff] min-h-screen text-black flex flex-col justify-center items-center"
      >
        <div className="max-w-3xl text-center justify-center">
         <div className='flex items-center'>
         <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Bloom & Grow Community
          </h1>
          <div className="w-[330px] flex justify-center mb-8">
            <img src={RotatingFlowers} alt="Rotating flowers" className="max-w-full h-auto" />
          </div>
         </div>
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
          <p className="mt-8 text-sm text-gray-300">
            Already a member?{' '}
            <button onClick={() => loginWithPopup()} className="underline">
              Log in here
            </button>
          </p>
        </div>
      </motion.div>
      {/* About Section */}
            <section id="about" className="text-center p-4">
        <h2 className="text-3xl font-bold mb-4">About Bloom N Grow</h2>
        <p>
          "Bloom N Grow" is an innovative gardening platform that aims to empower communities in Africa to maintain and nurture their gardens, promoting sustainability and environmental well-being.
        </p>
      </section>
      {/* Mission Section */}
      <section id="mission" className="text-center p-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide accessible and comprehensive gardening resources, enabling individuals and communities to cultivate thriving gardens, fostering a greener and healthier environment while promoting food security and self-sufficiency.
        </p>
      </section>
      {/* Features Section */}
      <section id="features" className="text-center p-4">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <ul className="list-disc list-inside">
          <li>User Profile: Personalize your experience and interact with the community.</li>
          <li>Garden Planner: Plan and manage your garden with ease.</li>
          <li>Community Forum: Engage with fellow gardening enthusiasts.</li>
          <li>Crops Calendar: Keep track of planting and harvesting times.</li>
          <li>Community Gardens: Participate in community gardening events.</li>
          <li>Marketplace: Buy and sell gardening supplies.</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
