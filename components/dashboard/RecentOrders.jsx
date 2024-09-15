// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'Order ID', width: 150 },
//   { field: 'product', headerName: 'Product', width: 200 },
//   { field: 'quantity', headerName: 'Quantity', width: 150 },
//   { field: 'status', headerName: 'Status', width: 200 },
//   { field: 'date', headerName: 'Date', width: 200 },
// ];

// const rows = [
//   { id: 1, product: 'Widget A', quantity: 10, status: 'Shipped', date: '2024-09-12' },
//   { id: 2, product: 'Widget B', quantity: 5, status: 'To be Packed', date: '2024-09-11' },
//   // Add more rows as needed
// ];

// const RecentOrders = () => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md h-80">
//       <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
//       <div style={{ height: '100%' }}>
//         <DataGrid rows={rows} columns={columns} pageSize={5} />
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;
// "use client"
// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Package } from 'lucide-react';

// const columns = [
//   { field: 'id', headerName: 'Order ID', width: 150 },
//   { field: 'product', headerName: 'Product', width: 200 },
//   { field: 'quantity', headerName: 'Quantity', width: 150 },
//   { field: 'status', headerName: 'Status', width: 200 },
//   { field: 'date', headerName: 'Date', width: 200 },
// ];

// const rows = [
//   { id: 1, product: 'Widget A', quantity: 10, status: 'Shipped', date: '2024-09-12' },
//   { id: 2, product: 'Widget B', quantity: 5, status: 'To be Packed', date: '2024-09-11' },
//   // Add more rows as needed
// ];

// const RecentOrders = () => {
//   return (
//     <div className="relative bg-white p-6 rounded-lg shadow-md w-full">
//       <div className="absolute top-4 right-4">
//         <Package className="text-blue-600" size={24} />
//       </div>
//       <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
//       <div style={{ height: '100%' }}>
//         <DataGrid rows={rows} columns={columns} pageSize={5} />
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;
// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Package } from 'lucide-react';

// const columns = [
//   { field: 'id', headerName: 'Order ID', width: 150 },
//   { field: 'product', headerName: 'Product', width: 200 },
//   { field: 'quantity', headerName: 'Quantity', width: 150 },
//   { field: 'status', headerName: 'Status', width: 200 },
//   { field: 'date', headerName: 'Date', width: 200 },
// ];

// const rows = [
//   { id: 1, product: 'Widget A', quantity: 10, status: 'Shipped', date: '2024-09-12' },
//   { id: 2, product: 'Widget B', quantity: 5, status: 'To be Packed', date: '2024-09-11' },
//   // Add more rows as needed
// ];

// const RecentOrders = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md h-80 relative">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold flex items-center space-x-2">
//           <Package className="text-blue-500" />
//           <span>Recent Orders</span>
//         </h3>
//       </div>
//       <div style={{ height: '100%' }}>
//         <DataGrid rows={rows} columns={columns} pageSize={5} />
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;
// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Package, CheckCircle, Clock, XCircle } from 'lucide-react'; // Additional icons

// const columns = [
//   { field: 'id', headerName: 'Order ID', width: 150 },
//   { field: 'product', headerName: 'Product', width: 200 },
//   { field: 'quantity', headerName: 'Quantity', width: 150 },
//   {
//     field: 'status',
//     headerName: 'Status',
//     width: 200,
//     renderCell: (params) => {
//       const status = params.value;
//       return (
//         <span className="flex items-center space-x-2">
//           {status === 'Shipped' && <CheckCircle className="text-green-500" />}
//           {status === 'To be Packed' && <Clock className="text-yellow-500" />}
//           {status === 'Cancelled' && <XCircle className="text-red-500" />}
//           <span>{status}</span>
//         </span>
//       );
//     }
//   },
//   { field: 'date', headerName: 'Date', width: 200 },
// ];

// const rows = [
//   { id: 1, product: 'Widget A', quantity: 10, status: 'Shipped', date: '2024-09-12' },
//   { id: 2, product: 'Widget B', quantity: 5, status: 'To be Packed', date: '2024-09-11' },
//   { id: 3, product: 'Widget C', quantity: 8, status: 'Cancelled', date: '2024-09-10' },
//   // Add more rows as needed
// ];

// const RecentOrders = () => {
//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg h-80 relative">
//       <div className="flex justify-between items-center mb-4 text-white">
//         <h3 className="text-lg font-semibold flex items-center space-x-2">
//           <Package className="text-white" />
//           <span>Recent Orders</span>
//         </h3>
//       </div>
//       <div style={{ height: '100%' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           className="bg-white text-black rounded-lg shadow-md"
//           sx={{
//             boxShadow: 2,
//             border: 1,
//             borderColor: 'primary.light',
//             '& .MuiDataGrid-cell:hover': {
//               color: 'primary.main',
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Package, CheckCircle, Clock, XCircle } from 'lucide-react'; // Additional icons

const columns = [
  { field: 'id', headerName: 'Order ID', width: 150 },
  { field: 'product', headerName: 'Product', width: 200 },
  { field: 'quantity', headerName: 'Quantity', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => {
      const status = params.value;
      return (
        <span className="flex items-center space-x-2">
          {status === 'Shipped' && <CheckCircle className="text-green-500" />}
          {status === 'To be Packed' && <Clock className="text-yellow-500" />}
          {status === 'Cancelled' && <XCircle className="text-red-500" />}
          <span>{status}</span>
        </span>
      );
    }
  },
  { field: 'date', headerName: 'Date', width: 200 },
];

const rows = [
  { id: 1, product: 'Widget A', quantity: 10, status: 'Shipped', date: '2024-09-12' },
  { id: 2, product: 'Widget B', quantity: 5, status: 'To be Packed', date: '2024-09-11' },
  { id: 3, product: 'Widget C', quantity: 8, status: 'Cancelled', date: '2024-09-10' },
  // Add more rows as needed
];

const RecentOrders = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg h-80 relative">
      <div className="flex justify-between items-center mb-4 text-white">
        <h3 className="text-lg font-semibold flex items-center space-x-2">
          <Package className="text-white" />
          <span>Recent Orders</span>
        </h3>
      </div>
      <div style={{ height: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          className="bg-white text-black rounded-lg shadow-md"
          sx={{
            boxShadow: 2,
            border: 1,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </div>
  );
};

export default RecentOrders;
