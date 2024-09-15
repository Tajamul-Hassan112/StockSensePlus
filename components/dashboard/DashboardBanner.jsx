// "use client"
// import { CreditCard, X } from 'lucide-react'
// import React, { useState } from 'react';



// export default function DashboardBanner() {
//    const[hidden,setHidden]=useState(false)
//   return (
//     <div className={`${hidden?"hidden":"grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative" }`}>
       
// {/* icons */}
// <div className="col-span-2">
// <CreditCard className="w-16 h-16 text-slate-500"/>
// </div>

// {/* text */}
// <div className="col-span-6" >
//     <h2 className="font-bold text-2xl ">Start accepting online payments </h2>
//     <p>Businesses are moving towards online payments and they're easy,secure and fast.Try them for your business today</p>
// </div>
// {/* button */}
// <div className="col-span-3">
// <button className="py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg">Enable</button>
// </div>
// {/* close-buttons */}
// <button  className=" absolute top-4 right-16" onClick={()=>setHidden(true)}>
//     <X className="text-slate-600"/>
// </button>
//     </div>
    
//   )
// }


// "use client"
// import { CreditCard, X } from 'lucide-react'
// import React, { useState } from 'react';

// export default function DashboardBanner() {
//   const [hidden, setHidden] = useState(false)

//   return (
//     <div className={`${hidden ? "hidden" : "grid grid-cols-1 sm:grid-cols-12 items-center py-6 px-4 sm:px-16 bg-white gap-4 relative"}`}>
       
//       {/* icons */}
//       <div className="flex justify-center sm:justify-start col-span-1 sm:col-span-2">
//         <CreditCard className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500"/>
//       </div>

//       {/* text */}
//       <div className="col-span-1 sm:col-span-6 text-center sm:text-left">
//         <h2 className="font-bold text-lg sm:text-2xl">Start accepting online payments</h2>
//         <p className="text-sm sm:text-base">Businesses are moving towards online payments and they're easy, secure, and fast. Try them for your business today.</p>
//       </div>

//       {/* button */}
//       <div className="flex justify-center sm:justify-end col-span-1 sm:col-span-3">
//         <button className="py-2 px-4 sm:py-2 sm:px-8 uppercase bg-blue-500 text-white text-xs sm:text-sm rounded-lg">
//           Enable
//         </button>
//       </div>

//       {/* close button */}
//       <button className="absolute top-4 right-4 sm:right-16" onClick={() => setHidden(true)}>
//         <X className="text-slate-600"/>
//       </button>
//     </div>
//   )
// }



"use client";

import React from 'react';
import ReactECharts from 'echarts-for-react';

const InventoryStatistics = () => {
  // Options for Bar Chart
  const barChartOptions = {
    title: {
      text: 'Product Stock Levels',
      left: 'center',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Product A', 'Product B', 'Product C', 'Product D'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Stock',
        type: 'bar',
        data: [120, 200, 150, 80],
        itemStyle: {
          color: '#4A90E2',
        },
      },
    ],
  };

  // Options for Pie Chart
  const pieChartOptions = {
    title: {
      text: 'Sales Distribution by Category',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '0%',
      left: 'center',
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 40, name: 'Electronics' },
          { value: 30, name: 'Furniture' },
          { value: 20, name: 'Clothing' },
          { value: 10, name: 'Books' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        itemStyle: {
          color: (params) => {
            const colors = ['#E74C3C', '#F39C12', '#2ECC71', '#3498DB'];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-4">Stock Levels</h3>
        <ReactECharts option={barChartOptions} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-lg mb-4">Sales Distribution</h3>
        <ReactECharts option={pieChartOptions} />
      </div>
    </div>
  );
};

export default InventoryStatistics;
