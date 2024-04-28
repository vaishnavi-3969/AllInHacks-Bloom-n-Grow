import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaRegClock } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { flower1, flower26, flower27, flower28, flower29, flower30, flower31, flower32, flower33, flower34 } from '../assets/images';

const VirtualWorkshops = () => {
    const workshops = [
        {
            id: 1,
            title: 'Gardening 101: Getting Started with Your First Garden',
            date: 'April 30, 2024',
            time: '10:00 AM - 12:00 PM',
            attendees: 25,
            image: flower26,
        },
        {
            id: 2,
            title: 'Companion Planting: Maximizing Garden Productivity',
            date: 'May 5, 2024',
            time: '2:00 PM - 4:00 PM',
            attendees: 20,
            image: flower27,
        },
        {
            id: 3,
            title: 'Organic Pest Control: Natural Solutions for a Healthy Garden',
            date: 'May 12, 2024',
            time: '3:00 PM - 5:00 PM',
            attendees: 30,
            image: flower28,
        },
        {
            id: 4,
            title: 'Sustainable Watering Techniques for Your Garden',
            date: 'May 18, 2024',
            time: '10:00 AM - 12:00 PM',
            attendees: 15,
            image: flower29,
        },
        {
            id: 5,
            title: 'DIY Composting: Turn Kitchen Scraps into Nutrient-Rich Soil',
            date: 'May 25, 2024',
            time: '2:00 PM - 4:00 PM',
            attendees: 18,
            image: flower30,
        },
        {
            id: 6,
            title: 'Container Gardening: Growing Your Garden in Small Spaces',
            date: 'June 3, 2024',
            time: '3:00 PM - 5:00 PM',
            attendees: 22,
            image: flower31,
        },
        {
            id: 7,
            title: 'Pruning Techniques: Shaping and Maintaining Your Plants',
            date: 'June 10, 2024',
            time: '10:00 AM - 12:00 PM',
            attendees: 28,
            image: flower32,
        },
        {
            id: 8,
            title: 'Herb Gardening: Growing and Using Fresh Herbs at Home',
            date: 'June 17, 2024',
            time: '2:00 PM - 4:00 PM',
            attendees: 25,
            image: flower33,
        },
        {
            id: 9,
            title: 'Seed Starting: Tips for Successful Germination',
            date: 'June 24, 2024',
            time: '3:00 PM - 5:00 PM',
            attendees: 20,
            image: flower34,
        },
    ];

    const [rsvpSuccess, setRsvpSuccess] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);

    const handleRSVP = (workshop) => {
        setSelectedWorkshop(workshop);
        setRsvpSuccess(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container py-8 mx-auto"
        >
            <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl">Upcoming Virtual Workshops</h1>
            {rsvpSuccess && selectedWorkshop && (
                <div className="mb-8 text-center">
                    <p className="mb-4 text-xl font-semibold">You have successfully RSVP'd for:</p>
                    <p className="mb-2 text-lg font-semibold">{selectedWorkshop.title}</p>
                    <Confetti width={400} height={300} />
                </div>
            )}
            <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
                {workshops.map((workshop) => (
                    <motion.div
                        key={workshop.id}
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-[#DAD7CD] text-[#344E41] rounded-md shadow-lg relative"
                    >
                        <h2 className="mb-2 text-xl font-semibold">{workshop.title}</h2>
                        <img src={workshop.image} alt='flower' className='rounded-lg'/>
                        <div className="flex items-center mb-2 text-gray-600">
                            <FaCalendarAlt className="mr-2" />
                            <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center mb-2 text-gray-600">
                            <FaRegClock className="mr-2" />
                            <span>{workshop.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaUsers className="mr-2" />
                            <span>{workshop.attendees} attendees</span>
                        </div>
                        <button
                            onClick={() => handleRSVP(workshop)}
                            className="absolute px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-green-500 rounded-md bottom-4 right-4 hover:bg-green-600"
                        >
                            RSVP
                        </button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default VirtualWorkshops;
