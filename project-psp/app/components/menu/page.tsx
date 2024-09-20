"use client"
import Link from 'next/link'
import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'


function Menu() {
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
                <li className={`hover:drop-shadow-md hover:text-red-200 ${findActiveMenu==="listActive" ? "text-red-300 font-bold" :""}`}>
                    <Link href="/components/list">
                        List
                    </Link>
                </li>
                <li className={`hover:drop-shadow-md hover:text-red-200 pt-2 ${findActiveMenu==="settingActive" ? "text-red-300 font-bold" :""}`}>
                    <Link href="/components/setting">
                        Setting
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu