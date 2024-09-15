import React from 'react'
import Link from 'next/link'
export default  function SalesActivityCard({item}) {
  return (
    <Link href="item.href"
    
    className="shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 px-6 py-6 w-78 h-48 cursor-pointer flex flex-col items-center gap-3 transition-all duration-500"
  >
    <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>
    <small className="text-slate-500">{item.unit}</small>
    <div className="flex items-center space-x-2 text-slate-500">
      {item.icon}
      <span className=" text-xs uppercase">{item.title}</span>
    </div>
  </Link>
  )
}

