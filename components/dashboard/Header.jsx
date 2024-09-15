
import React from "react";
import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image"; // Importing the Next.js Image component

import prof from "../../Images/prof.jpg";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8  border-b border-slate-300 ">
      <div className="flex gap-3">
        {/* Recent activities */}
        <button>
          <History className="h-6 w-6" />
        </button>

        {
          //search
          <SearchInput />
        }
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon */}
        <button className="p-1 rounded-lg bg-blue-600 text-slate-50 h-4 w-4 flex items-center justify-center">
          <Plus className="h-6 w-6" />
        </button>
        <div className="flex border-r border-gray-300 space-x-2">
          {/* User Icon */}
          <button className="ml-2 p-1 rounded-lg hover:bg-slate-200">
            <Users className="text-slate-900 h-4 w-4" />
          </button>
          <button className="ml-2 p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 h-4 w-4" />
          </button>
          <button className="ml-2 p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 h-4 w-4" />
          </button>
        </div>
        {/* Profile section */}
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Khyber</span>
            <ChevronDown className="w-4 h-3" />
          </button>
          <button className="flex items-center">
            <Image src={prof} alt="user" width={36} height={36} className="rounded-full w-8 h-8 border border-slate-800" />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900 "/>
           
          </button>
        </div>
      </div>
    </div>
  );
}
