import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../components/Firebase';

const CommunityGardening = () => {
    const [newGardenName, setNewGardenName] = useState('');
    const [gardens, setGardens] = useState([]);
    const [volunteerName, setVolunteerName] = useState('');
    const [volunteerEmail, setVolunteerEmail] = useState('');

    useEffect(() => {
        fetchGardens();
    }, []);

    const fetchGardens = async () => {
        try {
            const gardenCollection = collection(db, 'gardens');
            const gardenSnapshot = await getDocs(gardenCollection);
            const gardenData = gardenSnapshot.docs.map(doc => doc.data());
            setGardens(gardenData);
        } catch (error) {
            console.error('Error fetching gardens:', error);
        }
    };

    const handleAddGarden = async () => {
        try {
            await addDoc(collection(db, 'gardens'), { name: newGardenName });
            fetchGardens();
            setNewGardenName('');
        } catch (error) {
            console.error('Error adding garden:', error);
        }
    };

    const handleVolunteerRegistration = () => {
    };

    return (
        <div>
            <div className="container px-4 mx-auto">
                <h1 className="mt-8 mb-4 text-3xl font-bold">Community Gardening</h1>
                {/* Add a garden */}
                <div className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold">Add Your Garden to the List</h2>
                    <input
                        type="text"
                        className="w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter garden name"
                        value={newGardenName}
                        onChange={(e) => setNewGardenName(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                        onClick={handleAddGarden}
                    >
                        Add Garden
                    </button>
                </div>
                {/* List of existing gardens */}
                <div>
                    <h2 className="mb-2 text-xl font-semibold">Existing Gardens</h2>
                    <ul>
                        {gardens.map((garden, index) => (
                            <li key={index} className="mb-2">
                                {garden.name}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Volunteer registration */}
                <div className="mt-8">
                    <h2 className="mb-2 text-xl font-semibold">Register as a Volunteer</h2>
                    <input
                        type="text"
                        className="w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="w-full p-2 mb-2 text-black border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        value={volunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={handleVolunteerRegistration}
                    >
                        Register as Volunteer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunityGardening;
