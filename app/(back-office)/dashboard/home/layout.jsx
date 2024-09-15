import HomeNow from '@/components/dashboard/HomeNow'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className="">
        <HomeNow/>
        {children}
    </div>
  )
}

