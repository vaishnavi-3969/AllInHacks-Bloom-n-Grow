import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; 
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="bg-green-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold text-white tracking-wider uppercase">Bloom & Grow Community</Link>
          </div>
          <div className="flex items-center">
            <Link to="/marketplace" className="text-white flex items-center justify-center space-x-1 mr-4">
              <FaShoppingCart className="text-lg" />
              <span>Marketplace</span>
            </Link>
            {isAuthenticated && (
              <Link to="/community" className="text-white mr-4">Community</Link>
            )}
            {isAuthenticated ? (
              <div className="flex items-center">
                <span className="mr-4 text-white text-sm">Hi, {user.name}</span>
                <button onClick={() => logout()} className="text-white text-sm flex items-center">
                  <FaUserCircle className="mr-1 text-lg" /> Logout
                </button>
              </div>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-white text-sm flex items-center">
                <FaUserCircle className="mr-1 text-lg" /> Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;