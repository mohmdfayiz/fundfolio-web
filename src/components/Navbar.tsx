import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-white w-full border-b-2'>
            <div className='flex justify-between items-center max-w-7xl mx-auto py-6 px-3'>
                <Link href={"/"} className='text-3xl sm:text-4xl font-bold text-green '>fundfolio<span className='text-red'>.</span> </Link>
                <Link target='_blank' href={"/https://play.google.com/"} className='bg-green p-2 sm:px-4 sm:p-3 rounded-full text-white sm:text-lg text-base text-center flex items-center gap-1 shadow hover:shadow-md transition-all'>
                    <span className='hidden sm:inline'>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                    </svg>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar