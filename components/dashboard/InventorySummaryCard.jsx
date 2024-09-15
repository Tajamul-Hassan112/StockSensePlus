import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    <div  className=" mb-4 shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 py-4 px-6 w-72 h-18 cursor-pointer flex items-center justify-between transition-all duration-500">
    <h2 className="uppercase text-slate-500">{item.title}</h2>
    <h4 className="font-semibold text-sm uppercase pr-2">{item.number}</h4>
  </div>
  )
}

