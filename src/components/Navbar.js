import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; 
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="bg-[#dad7cd] py-4">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold text-[#344E41] tracking-wider uppercase">Bloom & Grow Community</Link>
          </div>
          <div className="flex items-center">
            <Link to="/marketplace" className="text-[#344E41] flex items-center justify-center space-x-1 mr-4">
              <FaShoppingCart className="text-lg" />
              <span>Marketplace</span>
            </Link>
            <Link to="/community" className="text-[#344E41] mr-4">Community</Link>
            {isAuthenticated ? (
              <div className="flex items-center">
                <span className="mr-4 text-[#344E41] text-sm">Hi, {user.name}</span>
                <button onClick={() => logout()} className="text-[#344E41] text-sm flex items-center">
                  <FaUserCircle className="mr-1 text-lg" /> Logout
                </button>
              </div>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-[#344E41] text-sm flex items-center">
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
