"use client"
import React from 'react'


function Setting() {
    const role=localStorage.getItem("role")

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