import React from 'react';

const GardenPlanner = () => {
  const handleTipClick = (tip) => {
    alert(`Tip: ${tip}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Step-by-Step Garden Planning for Beginners</h1>
      <ol className="list-decimal pl-8">
        <li className="mb-6">
          <strong>Choose Your Location:</strong> Find a spot that gets at least 6 hours of sunlight a day.
        </li>
        <li className="mb-6">
          <strong>Select Your Crops:</strong> Pick vegetables and herbs you love to eat and are suitable for your climate.
        </li>
        <li className="mb-6">
          <strong>Design Your Layout:</strong> Sketch your garden beds on paper, considering plant spacing and companion planting.
        </li>
        <li className="mb-6">
          <strong>Prepare the Soil:</strong> Enrich your soil with compost and organic matter.
        </li>
        <li className="mb-6">
          <strong>Planting:</strong> Follow the best practices for sowing seeds or transplanting seedlings.
        </li>
        <li className="mb-6">
          <strong>Maintenance:</strong> Learn about watering, weeding, and regular garden care.
          <button onClick={() => handleTipClick("Use mulch to retain moisture and suppress weeds.")} className="ml-2 text-blue-500">More Tips</button>
        </li>
        <li>
          <strong>Harvesting:</strong> Know when and how to harvest your crops for the best flavor and yield.
          <button onClick={() => handleTipClick("Harvest leafy greens in the morning for maximum freshness.")} className="ml-2 text-blue-500">More Tips</button>
        </li>
      </ol>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Tips:</h2>
        <ul className="list-disc pl-8">
          <li className="mb-2">Companion planting can help repel pests and improve soil health.</li>
          <li className="mb-2">Consider vertical gardening to maximize space.</li>
          <li className="mb-2">Keep a garden journal to track progress and learn from mistakes.</li>
        </ul>
      </div>
    </div>
  );
};

export default GardenPlanner;