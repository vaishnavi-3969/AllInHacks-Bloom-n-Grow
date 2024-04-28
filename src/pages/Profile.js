import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiUserCircle } from 'react-icons/bi';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    fetchLocation(latitude, longitude);
                },
                error => {
                    console.error('Error retrieving location:', error);
                }
            );
        }
    }, [isAuthenticated]);

    const fetchLocation = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            const city = data.address.city || data.address.town || data.address.village || '';
            const country = data.address.country || '';
            setCurrentLocation(`${city}, ${country}`);
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    return (
        <div className="container px-4 mx-auto text-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg mx-auto mt-10 overflow-hidden bg-[#DAD7CD] rounded-lg shadow-lg"
            >
                <div className="px-6 py-8">
                    <div className="text-center">
                        <div className="relative inline-block">
                           <img src={user.picture} alt={user.name} className='rounded-[50px]'/>
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-full opacity-0 hover:opacity-100">
                                <button className="px-4 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Change Photo</button>
                            </div>
                        </div>
                        <h1 className="mt-4 text-xl font-bold">{isAuthenticated ? user.name : 'Guest'}</h1>
                        <p className="text-sm text-gray-500">{isAuthenticated ? user.email : 'Not logged in'}</p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Account Information</h2>
                        <div className="flex justify-between mt-4">
                            <p className="text-gray-500">Username:</p>
                            <p className="font-semibold">{isAuthenticated ? user.nickname : 'N/A'}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-500">Member Since:</p>
                            <p className="font-semibold">April 2024</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-500">Location:</p>
                            <p className="font-semibold">{currentLocation || 'Loading...'}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Account Settings</h2>
                        <div className="flex justify-between mt-4">
                            <p className="text-gray-500">Notification Emails:</p>
                            <button className="px-4 py-1 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600">Enabled</button>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-500">Two-Factor Authentication:</p>
                            <button className="px-4 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600">Disabled</button>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="px-6 py-2 text-sm font-semibold text-white bg-[#588157] rounded-lg hover:bg-[#344E41]">Edit Profile</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Profile;
