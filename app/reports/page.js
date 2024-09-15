// "use client";

// import React, { useState } from 'react';
// import { FaChartBar, FaCalendarAlt, FaRedo } from 'react-icons/fa'; // Import icons from react-icons

// const sampleData = [
//   { date: '2024-09-15', item: 'Widget A', quantity: 150, totalValue: 1500 },
//   { date: '2024-09-16', item: 'Widget B', quantity: 200, totalValue: 2000 },
//   // Add more sample data as needed
// ];

// const ReportPage = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [filteredData, setFilteredData] = useState(sampleData);

//   const handleFilter = (e) => {
//     e.preventDefault();
//     const filtered = sampleData.filter((entry) =>
//       (!startDate || entry.date >= startDate) &&
//       (!endDate || entry.date <= endDate)
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 flex items-center space-x-4">
//         <FaChartBar className="h-8 w-8" />
//         <h1 className="text-3xl font-bold">Smart Inventory Management Reports</h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow mt-6">
//         {/* Report Filters */}
//         <section className="bg-white p-4 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <FaCalendarAlt className="h-6 w-6 text-blue-600" />
//             <span>Filters</span>
//           </h2>
//           <form onSubmit={handleFilter} className="flex flex-wrap gap-4">
//             <div className="w-full md:w-1/3">
//               <label htmlFor="start-date" className="block text-gray-700">Start Date:</label>
//               <input
//                 type="date"
//                 id="start-date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="w-full md:w-1/3">
//               <label htmlFor="end-date" className="block text-gray-700">End Date:</label>
//               <input
//                 type="date"
//                 id="end-date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="w-full md:w-1/3 flex items-end">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//               >
//                 <FaRedo className="inline-block mr-2" />
//                 Apply Filters
//               </button>
//             </div>
//           </form>
//         </section>

//         {/* Reports */}
//         <section className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
//             <FaChartBar className="h-6 w-6 text-blue-600" />
//             <span>Reports</span>
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300">
//               <thead>
//                 <tr className="border-b">
//                   <th className="p-4 text-left">Date</th>
//                   <th className="p-4 text-left">Item</th>
//                   <th className="p-4 text-left">Quantity</th>
//                   <th className="p-4 text-left">Total Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((entry, index) => (
//                   <tr key={index} className="border-b hover:bg-gray-100 transition">
//                     <td className="p-4">{entry.date}</td>
//                     <td className="p-4">{entry.item}</td>
//                     <td className="p-4">{entry.quantity}</td>
//                     <td className="p-4">${entry.totalValue.toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ReportPage;
"use client";

import React, { useState } from 'react';
import { FaChartBar, FaCalendarAlt, FaRedo } from 'react-icons/fa'; // Import icons from react-icons
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { Spinner } from 'react-bootstrap'; // Import Spinner for loading state

const sampleData = [
  { date: '2024-09-15', item: 'Widget A', quantity: 150, totalValue: 1500 },
  { date: '2024-09-16', item: 'Widget B', quantity: 200, totalValue: 2000 },
  // Add more sample data as needed
];

const ReportPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);
  const [loading, setLoading] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const filtered = sampleData.filter((entry) =>
        (!startDate || entry.date >= startDate) &&
        (!endDate || entry.date <= endDate)
      );
      setFilteredData(filtered.length > 0 ? filtered : [{ date: 'N/A', item: 'No Data', quantity: 0, totalValue: 0 }]);
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex items-center space-x-4 shadow-lg">
        <FaChartBar className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Smart Inventory Management Reports</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-6">
        {/* Report Filters */}
        <section className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaCalendarAlt className="h-6 w-6 text-blue-600" />
            <span>Filters</span>
          </h2>
          <form onSubmit={handleFilter} className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/3">
              <label htmlFor="start-date" className="block text-gray-700">Start Date:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label htmlFor="end-date" className="block text-gray-700">End Date:</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="w-full md:w-1/3 flex items-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center"
              >
                <FaRedo className="inline-block mr-2" />
                Apply Filters
              </button>
            </div>
          </form>
        </section>

        {/* Reports */}
        <section className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaChartBar className="h-6 w-6 text-blue-600" />
            <span>Reports</span>
          </h2>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center h-48">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="p-4 text-left">Date</th>
                      <th className="p-4 text-left">Item</th>
                      <th className="p-4 text-left">Quantity</th>
                      <th className="p-4 text-left">Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((entry, index) => (
                      <tr key={index} className="border-b hover:bg-gray-100 transition">
                        <td className="p-4">{entry.date}</td>
                        <td className="p-4">{entry.item}</td>
                        <td className="p-4">{entry.quantity}</td>
                        <td className="p-4">${entry.totalValue.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReportPage;
