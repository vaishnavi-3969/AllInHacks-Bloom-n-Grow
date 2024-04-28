import React, { useState } from 'react';
import { BiShoppingBag, BiUser } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { flower50, flower60 } from '../assets/images';


const Marketplace = () => {
    const [viewMode, setViewMode] = useState('buyer');
    const [cart, setCart] = useState([]);

    const switchViewMode = () => {
        setViewMode(prevMode => prevMode === 'buyer' ? 'seller' : 'buyer');
    };

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const handleCheckout = async () => {
       window.location.href = 'https://buy.stripe.com/test_28o01662sfm60rm9AA';
    };

    return (
        <div className="container px-4 mx-auto">
            <h1 className="mt-8 mb-4 text-3xl font-bold">Sustainable Marketplace</h1>
            <div className="flex items-center justify-between mb-4">
                <button
                    className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={switchViewMode}
                >
                    {viewMode === 'buyer' ? (
                        <>
                            <BiShoppingBag className="inline-block mr-2" /> Buy
                        </>
                    ) : (
                        <>
                            <BiUser className="inline-block mr-2" /> Sell
                        </>
                    )}
                </button>
                {viewMode === 'seller' && (
                    <button
                        className="flex items-center px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                        onClick={() => console.log('Register as Seller')}
                    >
                        Register as Seller
                    </button>
                )}
                {cart.length > 0 && (
                    <button
                        className="flex items-center px-4 py-2 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                        onClick={handleCheckout}
                    >
                        Checkout ({cart.length} items)
                    </button>
                )}
            </div>
            {viewMode === 'buyer' ? (
                <BuyerDashboard addToCart={addToCart} />
            ) : (
                <SellerDashboard />
            )}
        </div>
    );
};

const BuyerDashboard = ({ addToCart }) => {
    const products = [
        { id: 1, name: 'Recycled Plastic Bottle Planter', price: 10, image: flower50, description: 'Made from recycled plastic bottles, perfect for indoor plants.' },
        { id: 2, name: 'Handmade Bamboo Toothbrush', price: 5, image: flower60, description: 'Eco-friendly toothbrush made from sustainable bamboo.' },
    ];

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">Shop Sustainable Products</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {products.map(product => (
                    <motion.div
                        key={product.id}
                        className="p-4 bg-[#DAD7CD] text-black rounded-md shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={product.image} alt={product.name} className="object-cover w-full mb-2 rounded-md h-50" />
                        <div className="mb-2 text-lg font-semibold">{product.name}</div>
                        <p className="mb-2 text-gray-700">{product.description}</p>
                        <div className="text-gray-700">${product.price}</div>
                        <button
                            className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const SellerDashboard = () => {
    const myProducts = [
        { id: 1, name: 'Recycled Glass Earrings', price: 15, image: 'image-url', description: 'Beautiful earrings made from recycled glass, perfect for eco-conscious fashionistas.' },
        { id: 2, name: 'Handwoven Hemp Bag', price: 20, image: 'image-url', description: 'Stylish and durable bag handwoven from sustainable hemp fibers.' },
    ];

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">My Listings</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {myProducts.map(product => (
                    <motion.div
                        key={product.id}
                        className="p-4 bg-white rounded-md shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={product.image} alt={product.name} className="object-cover w-full h-40 mb-2 rounded-md" />
                        <div className="mb-2 text-lg font-semibold">{product.name}</div>
                        <p className="mb-2 text-gray-700">{product.description}</p>
                        <div className="text-gray-700">${product.price}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;