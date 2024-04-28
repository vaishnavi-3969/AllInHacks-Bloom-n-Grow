import React, { useState } from 'react';
import { BiShoppingBag, BiUser } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { bags, coffee, cutlery, earings, flower14, flower15, flower16, flower17, flower18, flower19, flower20, flower22, flower28, flower29, flower30, flower31, flower50, flower52, flower55, flower58, flower60, light, notebook, phoneCase, straw, totebag } from '../assets/images';

const Marketplace = () => {
  const [viewMode, setViewMode] = useState('buyer');
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const switchViewMode = () => {
    setViewMode(prevMode => prevMode === 'buyer' ? 'seller' : 'buyer');
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    console.log('Checkout Process:', cart);
    window.location.href = 'https://buy.stripe.com/test_bIY5lq3Uk0rc3Dy145'
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
        {cart.length > 0 && (
          <button
            className="flex items-center px-4 py-2 ml-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            onClick={() => setShowCheckout(true)}
          >
            View Cart ({cart.length})
          </button>
        )}
      </div>
      {viewMode === 'buyer' ? (
        <BuyerDashboard addToCart={addToCart} />
      ) : (
        <SellerDashboard />
      )}
      {showCheckout && (
        <CheckoutModal cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
      )}
    </div>
  );
};

const BuyerDashboard = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Recycled Plastic Bottle Planter', price: 10, image: flower50, description: 'Made from recycled plastic bottles, perfect for indoor plants.' },
    { id: 2, name: 'Handmade Bamboo Toothbrush', price: 5, image: flower60, description: 'Eco-friendly toothbrush made from sustainable bamboo.' },
    { id: 3, name: 'Organic Cotton Tote Bag', price: 15, image: totebag, description: 'Spacious tote bag made from organic cotton, perfect for shopping.' },
    { id: 4, name: 'Reusable Stainless Steel Straw Set', price: 8, image: straw, description: 'Set of reusable stainless steel straws with cleaning brush, eco-friendly alternative to plastic straws.' },
    { id: 5, name: 'Biodegradable Phone Case', price: 20, image: phoneCase, description: 'Phone case made from biodegradable materials, offering protection with minimal environmental impact.' },
    { id: 6, name: 'Bamboo Cutlery Set', price: 12, image: cutlery, description: 'Set of bamboo cutlery including fork, knife, spoon, and chopsticks, perfect for travel or everyday use.' },
    { id: 7, name: 'Recycled Paper Notebook', price: 7, image: notebook, description: 'Eco-friendly notebook made from recycled paper, ideal for jotting down notes and sketches.' },
    { id: 8, name: 'Plant-Based Compostable Trash Bags', price: 18, image: totebag, description: 'Pack of compostable trash bags made from plant-based materials, reducing environmental impact.' },
    { id: 9, name: 'Solar-Powered LED Outdoor Lights', price: 25, image: light, description: 'Set of solar-powered LED lights for outdoor use, providing sustainable lighting solutions.' },
    { id: 10, name: 'Fair Trade Organic Coffee Beans', price: 14, image: coffee, description: 'Premium fair trade organic coffee beans, ethically sourced and sustainably produced.' },

  ];


  return (
    <div>
    <div className='flex'>
    <h2 className="mb-4 text-xl font-semibold">Shop Sustainable Products</h2>
      <div className='flex items-center justify-center py-4 overflow-hidden text-center'>
        <img src={flower52} alt='flower' className='w-[100px] h-auto' />
        <img src={flower16} alt='flower' className='w-[100px] h-auto' />
        <img src={flower17} alt='flower' className='w-[100px] h-auto' />
        <img src={flower22} alt='flower' className='w-[100px] h-auto' />
        <img src={flower18} alt='flower' className='w-[100px] h-auto' />
        <img src={flower19} alt='flower' className='w-[100px] h-auto' />
        <img src={flower20} alt='flower' className='w-[100px] h-auto' />
        <img src={flower58} alt='flower' className='w-[100px] h-auto' />
      </div>
    </div>
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
    { id: 1, name: 'Recycled Glass Earrings', price: 15, image: earings, description: 'Beautiful earrings made from recycled glass, perfect for eco-conscious fashionistas.' },
    { id: 2, name: 'Handwoven Hemp Bag', price: 20, image: bags, description: 'Stylish and durable bag handwoven from sustainable hemp fibers.' },
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
            <img src={product.image} alt={product.name} className="w-[500px] mb-2 rounded-md" />
            <div className="mb-2 text-lg font-semibold">{product.name}</div>
            <p className="mb-2 text-gray-700">{product.description}</p>
            <div className="text-gray-700">${product.price}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CheckoutModal = ({ cart, removeFromCart, handleCheckout }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-md shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Your Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-300">
            <div>
              <p className="text-gray-700">{item.name}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
            <button className="text-red-500" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <div className="mt-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
