import React from 'react';

export default function Purchase() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Purchase Item
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Item Name:</label>
            <input
              type="text"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="number"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button className="w-full p-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
            Add Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
