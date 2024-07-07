import React from 'react'
import Link from 'next/link'
import { FAQS } from '@/utils/constants'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help Center",
    description: "Help Center for fundfolio",
};

const Help = () => {
    return (
        <section className='mx-auto my-auto px-3 py-10'>
            <div className='flex flex-col px-5 py-10 sm:p-10 gap-y-4 bg-white rounded-3xl max-w-7xl'>
                <h1 className='text-3xl font-semibold'>Help Center</h1>
                <p className='text-base font-regular'>
                    Welcome to fundfolio Help Center. Here, you will find answers to frequently asked questions. If your query isn’t addressed here, please feel free to
                    <Link target='_blank' href='mailto:mohmdfayisk@gmail.com' className='text-blue-500 underline'> contact us</Link> directly for further assistance.
                </p>
                <h2 className='text-2xl font-semibold mt-5'>Frequently Asked Questions</h2>
                {
                    FAQS.map((faq) => (
                        <div key={faq.id}>
                            <p className='text-lg font-semibold'>{faq.question}</p>
                            <p className='text-base font-regular'>{faq.answer}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Help