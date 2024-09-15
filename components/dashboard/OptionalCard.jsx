import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function OptionalCard({optionData}) {
    const {title,description,link,linkTitle,enabled,icon:Icon}=optionData
  return (
    <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div>
      <Icon strokeWidth="0.5px" className="w-36 h-32" />
    </div>
    <p className="line-clamp-1">
 {description}
    </p>
    {
        enabled? (
            <Link
      href={link}
      className="py-2 rounded-md bg-blue-600 text-white inline-flex items-center px-2 space-x-2"
    >
      <Plus className="  h-4 w-4" />
      {linkTitle}
    </Link>
        ) :
        <button className="py-2 rounded-md bg-blue-600 text-white inline-flex items-center px-2 space-x-2">
        Enable
      </button>
    }
  
  </div>
  )
}

