"use client"
import React, { Fragment } from 'react'
import { fetchData } from './meta/utils';
import { useQuery } from '@tanstack/react-query';
import { dataItem } from './meta/type';

function List() {
    const { data, isLoading } = useQuery({
        queryFn: async () => await fetchData(),
        queryKey: ["data"],
    });
    return (
        <Fragment>
            {isLoading ?
                <h1 className='flex items-center justify-center bg-gray-700 min-h-screen text-white text-5xl'>.......! Loading </h1>
                :
                <div className="p-4 w-auto bg-white-800 flex items-center justify-start flex-col min-h-screen">
                    <h2 className="text-2xl font-bold pb-5">List Data</h2>
                    <div className='w-1/2 h-1/2'>
                        <table className='table-auto border-collapse border border-slate-500 text-center'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-600 w-1/4'>user ID</th>
                                    <th className='border border-slate-600 w-1/4'>Id</th>
                                    <th className='border border-slate-600 w-1/4'>Title</th>
                                    <th className='border border-slate-600 w-1/4'>details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((item: dataItem) =>
                                        <tr>
                                            <td className='border border-slate-700'>{item?.userId}</td>
                                            <td className='border border-slate-700'>{item?.id}</td>
                                            <td className='border border-slate-700'>{item?.title}</td>
                                            <td className='border border-slate-700'>{item?.body}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>}
        </Fragment>
    )
}

export default List