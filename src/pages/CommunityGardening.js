import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../components/Firebase';
import { useAuth0 } from '@auth0/auth0-react';
import { BiCheckCircle, BiUser } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { flower46, flower56, flower57 } from '../assets/images';
import { Link } from 'react-router-dom';

const CommunityGardening = () => {
    const { user } = useAuth0();

    const [newGardenName, setNewGardenName] = useState('');
    const [newGardenOwner, setNewGardenOwner] = useState('');
    const [newGardenArea, setNewGardenArea] = useState('');
    const [newGardenVenue, setNewGardenVenue] = useState('');
    const [newGardenLocation, setNewGardenLocation] = useState('');
    const [newGardenTime, setNewGardenTime] = useState('');
    const [gardens, setGardens] = useState([]);
    const [volunteerName, setVolunteerName] = useState('');
    const [volunteerEmail, setVolunteerEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetchGardens();
    }, []);

    const fetchGardens = async () => {
        try {
            const gardenCollection = collection(db, 'gardens');
            const gardenSnapshot = await getDocs(gardenCollection);
            const gardenData = gardenSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setGardens(gardenData);
        } catch (error) {
            console.error('Error fetching gardens:', error);
        }
    };

    const handleAddGarden = async () => {
        try {
            await addDoc(collection(db, 'gardens'), { name: newGardenName, owner: user.name, area: newGardenArea, venue: newGardenVenue, location: newGardenLocation, time: newGardenTime, volunteers: [] });
            fetchGardens();
            setNewGardenName('');
            setNewGardenOwner('');
            setNewGardenArea('');
            setNewGardenVenue('');
            setNewGardenLocation('');
            setNewGardenTime('');
            setSubmitted(true);
        } catch (error) {
            console.error('Error adding garden:', error);
        }
    };

    const handleVolunteerRegistration = async (gardenId) => {
        try {
            const gardenRef = doc(db, 'gardens', gardenId);
            await updateDoc(gardenRef, { volunteers: arrayUnion({ name: user.name, email: user.email, picture: user.picture }) });
            fetchGardens();
            setVolunteerName('');
            setVolunteerEmail('');
        } catch (error) {
            console.error('Error registering as volunteer:', error);
        }
    };

    return (
        <div>
            <div className="container px-4 mx-auto">
                <h1 className="mt-8 mb-4 text-3xl font-bold">Community Gardening</h1>
                {/* Add a garden */}
                <div className="pb-4 mb-8 border-b-2">
                    <h2 className="mb-2 text-xl font-semibold">Add Your Garden to the List</h2>
                    <input
                        type="text"
                        className=" bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter garden name"
                        value={newGardenName}
                        onChange={(e) => setNewGardenName(e.target.value)}
                    />
                    <input
                        type="text"
                        className=" bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter owner's name"
                        value={user.name}
                        onChange={(e) => setNewGardenOwner(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter area"
                        value={newGardenArea}
                        onChange={(e) => setNewGardenArea(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter venue"
                        value={newGardenVenue}
                        onChange={(e) => setNewGardenVenue(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter location"
                        value={newGardenLocation}
                        onChange={(e) => setNewGardenLocation(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-[#DAD7CD] w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter date and time"
                        value={newGardenTime}
                        onChange={(e) => setNewGardenTime(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                        onClick={handleAddGarden}
                    >
                        Add Garden
                    </button>
                    {submitted && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center mt-2 text-green-500"
                        >
                            <BiCheckCircle className="mr-2" />
                            <span>Garden added successfully!</span>
                        </motion.div>
                    )}
                </div>
                {/* List of existing gardens */}
                <div>
                    <h2 className="mb-2 text-xl font-semibold">Existing Gardens</h2>
                    <ul>
                        {gardens.map((garden) => (
                            <li key={garden.id} className="pb-4 mb-2 border-b-2">

                                <div className="flex items-center justify-between">
                                    <img src={flower46} className='w-[130px]' alt='' />
                                    <div>
                                        <div>{garden.name} - {garden.owner}</div>
                                        <div>{garden.area}</div>
                                        <div>Venue: {garden.venue}</div>
                                        <Link to={garden.location}>Google Maps Location</Link>
                                        <div>Time: {garden.time}</div>
                                    </div>
                                    <div>
                                        <button
                                            className="flex items-center px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                            onClick={() => handleVolunteerRegistration(garden.id)}
                                        >
                                            <BiUser className="inline-block mr-2" /> Volunteer
                                        </button>
                                    </div>
                                </div>
                                <strong>Volunteers RSVP'd:</strong>
                                {garden.volunteers && garden.volunteers.length > 0 && (
                                    <div className="flex mt-2">
                                        {garden.volunteers.map((volunteer, index) => (
                                            <img key={index} src={volunteer.picture} alt={volunteer.name} className="w-8 h-8 mr-2 rounded-full" />
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center justify-center overflow-hidden text-center'>
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                    <img src={flower56} alt='flower' className='w-[100px] h-auto' />
                </div>
            </div>
        </div>
    );
};

export default CommunityGardening;
