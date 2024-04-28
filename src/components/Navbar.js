import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaAngleDown } from 'react-icons/fa'; 
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ scrollToSection }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isCommunityMenuOpen, setCommunityMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [isAboutMenuOpen, setAboutMenuOpen] = useState(false);

  const toggleCommunityMenu = () => {
    setCommunityMenuOpen(!isCommunityMenuOpen);
  };

  const toggleResourcesMenu = () => {
    setResourcesMenuOpen(!isResourcesMenuOpen);
  };

  const toggleAboutMenu = () => {
    setAboutMenuOpen(!isAboutMenuOpen);
  };

  return (
    <nav className="bg-[#dad7cd] py-4 text-[#344E41] z-50"> {/* Added z-50 to ensure the navbar is above other elements */}
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold text-[#344E41] tracking-wider uppercase">Bloom & Grow Community</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button onClick={toggleAboutMenu} className="text-[#344E41] flex items-center">
                <span>About</span>
                <FaAngleDown className="ml-1 text-lg" />
              </button>
              {isAboutMenuOpen && (
                <div className="absolute py-2 mt-2 bg-[#DAD7CD] rounded-md shadow-md">
                  <Link onClick={() => scrollToSection('#about')} className="block px-4 py-2 hover:bg-gray-100">About</Link>
                  <Link onClick={() => scrollToSection('#mission')} to="#mission" className="block px-4 py-2 hover:bg-gray-100">Mission</Link>
                  <Link onClick={() => scrollToSection('#features')} to="#features" className="block px-4 py-2 hover:bg-gray-100">Features</Link>
                  <Link to="/team">Team</Link>
                </div>
              )}
            </div>
            {isAuthenticated && (
              <div className="relative">
                <button onClick={toggleCommunityMenu} className="text-[#344E41] flex items-center">
                  <span>Community</span>
                  <FaAngleDown className="ml-1 text-lg" />
                </button>
                {isCommunityMenuOpen && (
                  <div className="absolute py-2 mt-2 bg-[#DAD7CD] rounded-md shadow-md">
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
                <FaAngleDown className="ml-1 text-lg" />
              </button>
              {isResourcesMenuOpen && (
                <div className="absolute py-2 mt-2 bg-[#DAD7CD] rounded-md shadow-md">
                  <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link>
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
              <Link to="/profile" className='flex items-center justify-center bold'><img src={user.picture} className="rounded-[80px] w-[40px] justify-center p-1" alt=''/><span className="text-[#344E41] text-sm ">Hi, {user.name}</span></Link>
                <button onClick={() => logout()} className="text-[#344E41] text-sm">Logout</button>
              </>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-[#344E41] text-lg">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
