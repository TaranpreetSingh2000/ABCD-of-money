'use client'
import React, { useState } from 'react'
import { accordianData } from '@/constants/accordianData'
import Link from 'next/link'

const AccordianSection = () => {
    const [show, setShow] = useState(true)
    const handleAccordian = (index) => {
        setShow(prev => ({
            ...prev,
            [index]: !prev[index]
        })
        )
    }

    return (
        <div className='max-w-5xl mx-auto p-4 border border-gray-300 rounded-xl bg-gray-50'>
            <h2 className='font-semibold text-black text-sm'>Help & FAQs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                {accordianData?.faqs?.map((item, index) => {
                    return (
                        <div key={index} className='border shadow-xs border-gray-200 h-fit rounded-xl bg-white p-3'>
                            <h3 onClick={() => handleAccordian(index)}
                                className='flex justify-between items-center cursor-pointer text-black text-sm font-semibold'>{item.question}
                                <span>
                                    <svg
                                        className={`${show[index] ? 'rotate-180' : ''} w-5 h-3 text-gray-500 `}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </h3>
                            {show[index] && <><div className={`line-clamp-2 text-sm pt-2 ${show[index] ? "h-fit" : "h-0"}`}>
                                <p className='text-gray-500'>{item.answer}</p>
                            </div>
                                <button className='text-red-700 font-semibold text-sm pt-1'>Read More</button>
                            </>}
                        </div>
                    )
                }
                )}
            </div>
            <div className='flex justify-center items-center gap-1 mt-5'>
                <Link href='_blank' className='text-red-600 text-sm font-semibold'>Ask Simplifi</Link>
                <span>
                    <svg
                        className='rotate-270 w-5 h-3 text-red-600'
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default AccordianSection












