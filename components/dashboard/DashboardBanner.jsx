"use client"
import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react';



export default function DashboardBanner() {
   const[hidden,setHidden]=useState(false)
  return (
    <div className={`${hidden?"hidden":"grid grid-cols-12 items-center py-6 px-16 bg-white gap-4 relative" }`}>
       
{/* icons */}
<div className="col-span-2">
<CreditCard className="w-16 h-16 text-slate-500"/>
</div>

{/* text */}
<div className="col-span-6" >
    <h2 className="font-bold text-2xl ">Start accepting online payments </h2>
    <p>Businesses are moving towards online payments and they're easy,secure and fast.Try them for your business today</p>
</div>
{/* button */}
<div className="col-span-3">
<button className="py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg">Enable</button>
</div>
{/* close-buttons */}
<button  className=" absolute top-4 right-16" onClick={()=>setHidden(true)}>
    <X className="text-slate-600"/>
</button>
    </div>
    
  )
}

