
"use client";

import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Subscription from "./Subscription";
import React from "react";
import Link from "next/link";
import SideBarDropDown from "./SideBarDropDown";

export default function Sidebar() {
  const inventoryLinks = [
    { title: "Items", href: "/dashboard/inventory" },
    { title: "Categories", href: "/dashboard/inventory" },
    { title: "Brands", href: "/dashboard/inventory" },
    { title: "Units", href: "/dashboard/inventory" },
    { title: "Warehouse", href: "/dashboard/inventory" },
    { title: "Inventory Adjustment", href: "/dashboard/inventory" },
    { title: "Supplier", href: "/dashboard/inventory" },
  ];

  const salesLinks = [
    { title: "Customers", href: "#" },
    { title: "Sales Orders", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Shipments", href: "#" },
    { title: "Invoices", href: "#" },
    { title: "Sales Receipts", href: "#" },
    { title: "Payment Received", href: "#" },
    { title: "Sales returns", href: "#" },
    { title: "Credit Notes", href: "#" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-800 text-slate-50 fixed">
      <div className="flex flex-col">
        <Link
          href="#"
          className="bg-slate-950 flex space-x-2 items-center py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-semibold text-xl">Inventory</span>
        </Link>
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="#"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="h-4 w-6" />
            <span>Home</span>
          </Link>

          <SideBarDropDown
            items={inventoryLinks}
            title="Inventory"
            icon={BaggageClaim}
          />
          <SideBarDropDown
            items={salesLinks}
            title="Sales"
            icon={ShoppingBasket}
          />

          <button className="flex items-center space-x-2 p-2">
            <ShoppingBag className="h-4 w-6" />
            <span>Purchases</span>
          </button>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Cable className="h-4 w-6" />
            <span>Integrations</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <BarChart4 className="h-4 w-6" />
            <span>Reports</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 p-2">
            <Files className="h-4 w-6" />
            <span>Documents</span>
          </Link>
        </nav>
        <Subscription />
      </div>
      <div className="flex flex-col">
        <button className="bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center">
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
