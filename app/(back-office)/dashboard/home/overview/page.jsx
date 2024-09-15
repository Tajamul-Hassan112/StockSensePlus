// import DashboardBanner from '@/components/dashboard/DashboardBanner'
// import SalesOverview from '@/components/dashboard/SalesOverview'
// import React from 'react'

// export default function Dashboard() {
//   return (
//     <div>
//         <h2>
//           <DashboardBanner/>
//             <SalesOverview/>
//         </h2>
//     </div>
//   )
// }

// "use client"
// import React from 'react';
// import DashboardBanner from '@/components/dashboard/DashboardBanner';
// import InventoryStatistics from '@/components/dashboard/InventoryStatistics';
// import RecentOrders from '@/components/dashboard/RecentOrders';
// import SalesOverview from '@/components/dashboard/SalesOverview';

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <DashboardBanner />
//       <div className="p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           <InventoryStatistics />
//           <RecentOrders />
//           <SalesOverview />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import React from 'react';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import InventoryStatistics from '@/components/dashboard/InventoryStatistics';
import RecentOrders from '@/components/dashboard/RecentOrders';
import SalesOverview from '@/components/dashboard/SalesOverview';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardBanner />
      <div className="p-6 space-y-6">
        {/* First Row: Sales Activity and Inventory Summary */}
        <SalesOverview />

        {/* Second Row: Inventory Statistics and Recent Orders */}
        <div className="grid grid-cols-1 gap-6">
          <InventoryStatistics />
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
