"use client"
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'


function Setting() {
    const role=localStorage.getItem("role")
    const pathname = usePathname()
    useEffect(()=>{
        if(pathname==="/components/setting" && role==="user")
            redirect("/")
    },[pathname, role])
    return (
        role === "user" ?
            <div className="p-4 flex items-center justify-center min-h-screen bg-red-600">
                <h2 className="text-2xl font-bold ">no permission</h2>
            </div>
            :
            <div className="p-4 flex items-center justify-center min-h-screen bg-yellow-200">
                <h2 className="text-2xl font-bold ">Settings Component</h2>
            </div>
    )
}

export default Setting