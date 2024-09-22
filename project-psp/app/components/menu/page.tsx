"use client"
import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { MyStringType, useNewContext } from '../context/newContext';


function Menu() {
    const { state, setState } = useNewContext();
    
    useEffect(() => {
        setState(localStorage?.getItem("role") as MyStringType)
    }, [setState])

    const pathname = usePathname()

    const findActiveMenu = useMemo(() => {
        if (pathname.includes("list"))
            return "listActive"
        if (pathname.includes("setting"))
            return "settingActive"
        return "nothing"
    }, [pathname])

    return (
        <nav className="bg-gray-400 text-white p-4 w-40 fixed right-0 h-screen pr-8 ">
            <ul className="flex flex-col text-right list-disc ">
                <li className={`hover:drop-shadow-md hover:text-red-200 pt-2 ${findActiveMenu === "nothing" ? "text-gray-900 font-bold" : ""}`}>
                    <Link href="/">
                        Main
                    </Link>
                </li>
                <li className={`hover:drop-shadow-md hover:text-red-200 mt-2 ${findActiveMenu === "listActive" ? "text-gray-900 font-bold" : ""}`}>
                    <Link href="/components/list">
                        List
                    </Link>
                </li>
                <li className={` hover:drop-shadow-md hover:text-red-200 pt-2 ${findActiveMenu === "settingActive" ? "text-gray-900 font-bold" : ""} ${state === "user" ? "pointer-events-none" : ""} `}>
                    <Link href="/components/setting">
                        Setting
                    </Link>
                </li>

            </ul>
            <span className='text-lg mt-5 fixed bottom-0 pb-5 '>Role : <span className={`${state === "user" ? "text-green-400" : "text-red-500"}`}>{state}</span> </span>
        </nav>
    )
}

export default Menu