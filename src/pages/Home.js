import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSeedling } from 'react-icons/fa'; 
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Welcome to Bloom & Grow Community</h1>
        <p className="text-lg md:text-xl">
          Your go-to platform for all things related to sustainable gardening and community building.
        </p>
      </div>

      {isAuthenticated && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl">
            Ready to start your sustainable journey?{' '}
            <Link to="/marketplace" className="underline">Explore our Marketplace</Link> or{' '}
            <Link to="/community" className="underline">Join our Community</Link>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
