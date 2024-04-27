import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const {user, loginWithPopup} = useAuth0();
  
  return (
    <div className="bg-green-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Bloom & Grow Community</h1>
        <p className="text-lg md:text-xl mb-8">Join our vibrant community of plant lovers, where you can connect, learn, and grow together.</p>
        <div className="flex justify-center mb-12">
          <button onClick={() => loginWithPopup()} className="bg-green-500 hover:bg-green-600 text-lg md:text-xl font-bold py-2 px-6 rounded-full mr-4">Sign Up</button>
          <button onClick={() => loginWithPopup()} className="bg-transparent border-2 border-white hover:border-green-500 text-lg md:text-xl font-bold py-2 px-6 rounded-full">Log In</button>
        </div>
        <p className="text-lg md:text-xl">Not sure where to start? Explore our <Link to="/community" className="underline">community gardens</Link> or visit our <Link to="/marketplace" className="underline">marketplace</Link> for sustainable gardening products.</p>
      </div>
    </div>
  );
};

export default Landing;