"use client"
import FixedHeader from "@/components/dashboard/FixedHeader";
import {  Diff, Factory, LayoutGrid, LayoutPanelTop, Scale, Slack, Warehouse } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Plus } from "lucide-react";
import OptionalCard from "@/components/dashboard/OptionalCard";
export default function Inventory() {
  
 const optionCards=[
 
  
  {
    title:"Items",
    description:"Create standalone items and services that you buy and sell",
    link:"/dashboard/inventory/items/new",
    linkTitle:"New Item",
    enabled:true,
    icon:LayoutGrid,
  },
  {
    title:" Categories",
    description:"Bundle different items together and sell them as kits",
    link:"/dashboard/inventory/categories/new",
    linkTitle:"New Category",
    enabled:true,
    icon:LayoutPanelTop,
  },
  {
    title:"Brands",
    description:"Tweak your item prices for specific contacts or transactions",
    link:"/dashboard/inventory/brands/new",
    linkTitle:"New Brand",
    enabled:true,
    icon:Slack,
  },
  {
    title:"Warehouse",
    description:"Tweak your item prices for specific contacts or transactions",
    link:"/dashboard/inventory/warehouse/new",
    linkTitle:"New Warehouse",
    enabled:true,
    icon:Warehouse,
  },
 
  {
    title:"Units",
    description:"Tweak your item prices for specific contacts or transactions",
    link:"/dashboard/inventory/units/new",
    linkTitle:"New Unit",
    enabled:true,
    icon:Scale,
  },
  {
    title:"Inventory Adjustment",
    description:"Transfer stock from the main warehouse",
    link:"/dashboard/inventory/adjustments/new",
    linkTitle:"New Adjustment",
    enabled:true,
    icon:Diff,
  },
  {
    title:"Suppliers",
    description:"Transfer stock from the main warehouse",
    link:"/dashboard/inventory/suppliers/new",
    linkTitle:"New Supplier",
    enabled:true,
    icon:Factory,
  },
  
  
 ]
  return (
    <div>
      <FixedHeader   newLink="/dashboard/inventory/items/new"/>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 m-4 py-8 px-16 gap-7">
      {
        optionCards.map((card,i)=>{
          return (
            <OptionalCard optionData={card} key={i}/>
          )
        })
      }
      
      </div>
    </div>
  );
}
