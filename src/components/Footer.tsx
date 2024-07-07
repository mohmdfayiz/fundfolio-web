import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-white w-full border-t-2'>
            <div className='flex sm:flex-row flex-col gap-5 justify-between items-center max-w-7xl mx-auto py-6 px-3'>
                <p>© 2024 fundfolio.</p>
                <div className='flex gap-5'>
                    <Link href={'/privacy'}>Privacy</Link>
                    <Link href={'/help'}>Help</Link>
                    <Link target={'_blank'} href={'mailto:mohmdfayisk@gmail.com'}>Contact</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer