// "use client";
// import React from "react";
// import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
// import Link from "next/link";
// export default function FixedHeader({newLink}) {
//   return <div className="flex justify-between items-center bg-white py-5 px-4"
//   >
//     <button className="text-2xl ">All Items</button>
//     <div className="flex gap-4">
//       {/* new */}
//       <Link href={newLink} className="p-1 rounded-md bg-blue-600 text-white flex items-center px-2 space-x-2">
//           <Plus className="  h-4 w-4" />
//           <span>New</span>
//         </Link>
//       {/* layout */}
//       <div className="flex rounded-md overflow-hidden">
//         <button className="bg-gray-200 p-2 border-r border-gray-400 ">
//           <List className="h-4 w-4"/>
//         </button>
//         <button className="bg-gray-300 p-2">
//           <LayoutGrid className="h-4 w-4"/>
//         </button>
//       </div>
//       {/* more */}
//       <button className="bg-gray-200 p-2 rounded-md ">
//         <MoreHorizontal className="h-4 w-4"/>
//       </button>
//       <button className="bg-orange-400 p-2 text-white rounded-md ">
//         <HelpCircle className="h-5 w-5"/>
//       </button>
//       {/* help */}
//     </div>
//   </div>;
// }
"use client";
import React from "react";
import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

export default function FixedHeader({ newLink }) {
  // Validate that newLink is a non-empty string
  const isLinkValid = typeof newLink === 'string' && newLink.trim() !== '';

  return (
    <div className="flex justify-between items-center bg-white py-5 px-4">
      <button className="text-2xl">All Items</button>
      <div className="flex gap-4">
        {/* New link */}
        {isLinkValid ? (
          <Link href={newLink} className="p-1 rounded-md bg-blue-600 text-white flex items-center px-2 space-x-2">
            <Plus className="h-4 w-4" />
            <span>New</span>
          </Link>
        ) : (
          <button className="p-1 rounded-md bg-blue-600 text-white flex items-center px-2 space-x-2" disabled>
            <Plus className="h-4 w-4" />
            <span>New</span>
          </button>
        )}
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden">
          <button className="bg-gray-200 p-2 border-r border-gray-400">
            <List className="h-4 w-4" />
          </button>
          <button className="bg-gray-300 p-2">
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
        {/* More */}
        <button className="bg-gray-200 p-2 rounded-md">
          <MoreHorizontal className="h-4 w-4" />
        </button>
        <button className="bg-orange-400 p-2 text-white rounded-md">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
