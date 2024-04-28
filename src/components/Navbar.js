import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaAngleDown } from 'react-icons/fa'; 
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isCommunityMenuOpen, setCommunityMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setResourcesMenuOpen] = useState(false);

  const toggleCommunityMenu = () => {
    setCommunityMenuOpen(!isCommunityMenuOpen);
  };

  const toggleResourcesMenu = () => {
    setResourcesMenuOpen(!isResourcesMenuOpen);
  };

  return (
    <nav className="bg-[#dad7cd] py-4">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold text-[#344E41] tracking-wider uppercase">Bloom & Grow Community</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-[#344E41]">About</Link>
            {isAuthenticated && (
              <div className="relative">
                <button onClick={toggleCommunityMenu} className="text-[#344E41] flex items-center">
                  <span>Community</span>
                  <FaAngleDown className="text-lg ml-1" />
                </button>
                {isCommunityMenuOpen && (
                  <div className="absolute py-2 mt-2 bg-white rounded-md shadow-md">
                    <Link to="/forum" className="block px-4 py-2 hover:bg-gray-100">Forum</Link>
                    <Link to="/community-garden" className="block px-4 py-2 hover:bg-gray-100">Community Garden</Link>
                    <Link to="/virtual-workshops" className="block px-4 py-2 hover:bg-gray-100">Virtual Workshops</Link>
                  </div>
                )}
              </div>
            )}
            <div className="relative">
              <button onClick={toggleResourcesMenu} className="text-[#344E41] flex items-center">
                <span>Resources</span>
                <FaAngleDown className="text-lg ml-1" />
              </button>
              {isResourcesMenuOpen && (
                <div className="absolute py-2 mt-2 bg-white rounded-md shadow-md">
                  <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                  <Link to="/video" className="block px-4 py-2 hover:bg-gray-100">Video</Link>
                  <Link to="/garden-planner" className="block px-4 py-2 hover:bg-gray-100">Garden Planner</Link>
                  <Link to="/crop-calendar" className="block px-4 py-2 hover:bg-gray-100">Crop Calendar</Link>
                </div>
              )}
            </div>
            <Link to="/marketplace" className="text-[#344E41] flex items-center">
              <FaShoppingCart className="text-lg" />
              <span>Marketplace</span>
            </Link>
            {isAuthenticated ? (
              <>
                <span className="text-[#344E41] text-sm">Hi, {user.name}</span>
                <button onClick={() => logout()} className="text-[#344E41] text-sm">Logout</button>
              </>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-[#344E41] text-sm">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

