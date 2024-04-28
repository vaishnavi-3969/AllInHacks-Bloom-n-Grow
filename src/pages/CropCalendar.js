import React from 'react';

const CropCalendar = () => {
  const handleMonthClick = (month) => {
    alert(`Month: ${month}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Monthly Crop Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">January</h2>
          <p>Plan your garden and order seeds.</p>
          <button onClick={() => handleMonthClick("January")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">February</h2>
          <p>Start seeds indoors for cool-season crops.</p>
          <button onClick={() => handleMonthClick("February")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">March</h2>
          <p>Prepare garden beds as the soil thaws.</p>
          <button onClick={() => handleMonthClick("March")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">April</h2>
          <p>Begin transplanting and direct sowing of hardy vegetables.</p>
          <button onClick={() => handleMonthClick("April")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">May</h2>
          <p>Plant warm-season crops after the last frost date.</p>
          <button onClick={() => handleMonthClick("May")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">June</h2>
          <p>Maintain watering and weeding routines.</p>
          <button onClick={() => handleMonthClick("June")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">July</h2>
          <p>Start harvesting early crops and succession planting.</p>
          <button onClick={() => handleMonthClick("July")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">August</h2>
          <p>Continue harvesting and begin saving seeds.</p>
          <button onClick={() => handleMonthClick("August")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">September</h2>
          <p>Plant fall crops and begin winter preparations.</p>
          <button onClick={() => handleMonthClick("September")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">October</h2>
          <p>Harvest remaining crops and clean up beds.</p>
          <button onClick={() => handleMonthClick("October")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">November</h2>
          <p>Mulch overwintering crops and plan for next year.</p>
          <button onClick={() => handleMonthClick("November")} className="mt-2 text-blue-500">More Info</button>
        </div>
        <div className="bg-[#DAD7CD] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">December</h2>
          <p>Rest and enjoy the fruits of your labor.</p>
          <button onClick={() => handleMonthClick("December")} className="mt-2 text-blue-500">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;