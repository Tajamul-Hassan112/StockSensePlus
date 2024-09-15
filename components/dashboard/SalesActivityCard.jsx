// import React from 'react'
// import Link from 'next/link'
// export default  function SalesActivityCard({item}) {
//   return (
//     <Link href="item.href"
    
//     className="shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 px-6 py-6 w-78 h-48 cursor-pointer flex flex-col items-center gap-3 transition-all duration-500"
//   >
//     <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
//     <small className="text-slate-500">{item.unit}</small>
//     <div className="flex items-center space-x-2 text-slate-500">
//       {item.icon}
//       <span className=" text-xs uppercase">{item.title}</span>
//     </div>
//   </Link>
//   )
// }


import React from 'react';
import Link from 'next/link';

export default function SalesActivityCard({ item }) {
  return (
    <Link
      href={item.href}
      className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="p-6 text-center flex flex-col items-center">
        <h4 className={`text-4xl font-bold ${item.color}`}>{item.number}</h4>
        <small className="text-gray-500">{item.unit}</small>
        <div className="flex items-center space-x-2 mt-4 text-gray-600">
          <div className="text-2xl">{item.icon}</div>
          <span className="text-sm font-medium uppercase">{item.title}</span>
        </div>
      </div>
      <div className="w-full p-2 bg-gray-100 rounded-b-lg flex justify-center">
        <span className="text-blue-600 font-semibold hover:underline">View Details</span>
      </div>
    </Link>
  );
}
