

import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'
export default function SalesOverview() {
  const inventorySummary=[
    {
      title:"Quantity in hand",
      number:10,
    },
    {
      title:"Quantity to be received ",
      number:0,
    }
  ]
  const salesActivity = [
    {
      title: "To be Packed",
      number: 10,
      unit: "Qty",
      href: "#",
      icon: <CheckCircle2 />,
      color: "text-blue-600"
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      icon: <CheckCircle2 />,
      color: "text-red-600"
    },
    {
      title: "To be Delivered",
      number: 10,
      unit: "Pkgs",
      href: "#",
      icon: <CheckCircle2 />,
      color: "text-green-600"
    },
    {
      title: "To be Invoiced",
      number: 10,
      unit: "Qty",
      href: "#",
      icon: <CheckCircle2 />,
      color: "text-orange-600"
    }
  ]

  return (
    <div className="bg-blue-50 border-slate-300 p-8">
      {/* Sales Activity  */}
      <h2 className="mb-4 text-xl">Sales Activity</h2>
      <div className=" flex items-start space-x-6  border-slate-300 ">
        {/* Sales Activity Boxes */}
        <div className="flex space-x-4 gap-4 pr-8">
          {salesActivity.map((item, i) => {
            return (
              <SalesActivityCard item={item} key={i}/>
            )
          })}
        </div>

        {/* Inventory Summary Box*/}
        <div className=" mb-64">
          <h2 className="mb-4 text-xl">Inventory Summary</h2>
        {
          inventorySummary.map((item,i)=>{
            return (
            <InventorySummaryCard item={item} key={i}/>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
