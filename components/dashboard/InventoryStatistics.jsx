// // components/dashboard/InventoryStatistics.jsx
// import React from 'react';
// import ReactECharts from 'echarts-for-react';
// import { useTheme } from '@mui/material/styles';

// const InventoryStatistics = () => {
//   const theme = useTheme();
  
//   const option = {
//     title: {
//       text: 'Inventory Statistics',
//       left: 'center',
//       top: '10%',
//       textStyle: {
//         color: theme.palette.text.primary,
//       },
//     },
//     tooltip: {},
//     legend: {
//       data: ['Stock', 'Sales'],
//       top: '20%',
//     },
//     xAxis: {
//       type: 'category',
//       data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         name: 'Stock',
//         type: 'bar',
//         data: [23, 34, 45, 56, 67, 78, 89],
//       },
//       {
//         name: 'Sales',
//         type: 'line',
//         data: [12, 24, 36, 48, 60, 72, 84],
//       },
//     ],
//   };

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <ReactECharts option={option} />
//     </div>
//   );
// };

// export default InventoryStatistics;
// "use client"
// import React from 'react';
// import ReactECharts from 'echarts-for-react';
// import { useTheme } from '@mui/material/styles';
// import { BarChart, TrendingUp } from 'lucide-react';

// const InventoryStatistics = () => {
//   const theme = useTheme();

//   const option = {
//     title: {
//       text: 'Inventory Statistics',
//       left: 'center',
//       top: '10%',
//       textStyle: {
//         color: theme.palette.text.primary,
//       },
//     },
//     tooltip: {},
//     legend: {
//       data: ['Stock', 'Sales'],
//       top: '20%',
//     },
//     xAxis: {
//       type: 'category',
//       data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         name: 'Stock',
//         type: 'bar',
//         data: [23, 34, 45, 56, 67, 78, 89],
//         itemStyle: {
//           color: '#1f77b4',
//           borderRadius: [4, 4, 0, 0],
//           animationDelay: idx => idx * 200,
//         },
//       },
//       {
//         name: 'Sales',
//         type: 'line',
//         data: [12, 24, 36, 48, 60, 72, 84],
//         smooth: true,
//         itemStyle: {
//           color: '#ff7f0e',
//         },
//       },
//     ],
//     animationDurationUpdate: 1000,
//   };

//   return (
//     <div className="relative bg-white p-6 rounded-lg shadow-md w-full">
//       <div className="absolute top-4 right-4">
//         <TrendingUp className="text-green-600" size={24} />
//       </div>
//       <div className="flex items-center mb-4 space-x-2">
//         <BarChart className="text-blue-600" size={30} />
//         <h3 className="text-lg font-semibold">Inventory Statistics</h3>
//       </div>
//       <div style={{ height: 400, width: '100%' }}>
//         <ReactECharts option={option} />
//       </div>
//     </div>
//   );
// };

// export default InventoryStatistics;
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';
import { BarChart2, TrendingUp } from 'lucide-react';

const InventoryStatistics = () => {
  const theme = useTheme();

  const option = {
    title: {
      
      left: 'center',
      textStyle: {
        color: theme.palette.text.primary,
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Stock', 'Sales'],
      top: '5%',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Stock',
        type: 'bar',
        data: [23, 34, 45, 56, 67, 78, 89],
        itemStyle: {
          color: '#42A5F5',
        },
      },
      {
        name: 'Sales',
        type: 'line',
        data: [12, 24, 36, 48, 60, 72, 84],
        smooth: true,
        lineStyle: {
          color: '#EF5350',
        },
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-80 relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center space-x-2">
          <BarChart2 className="text-blue-500" />
          <span>Inventory Statistics</span>
        </h3>
        <TrendingUp className="text-green-500 animate-bounce" />
      </div>
      <ReactECharts option={option} style={{ height: 250 }} />
    </div>
  );
};

export default InventoryStatistics;
