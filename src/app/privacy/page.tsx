import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for fundfolio",
};

const Privacy = () => {
    return (
        <section className='mx-auto my-auto px-3 py-10'>
            <div className='flex flex-col px-5 py-10 sm:p-10 gap-y-4 bg-white rounded-3xl max-w-7xl'>
                <h1 className='text-3xl font-semibold'>Privacy Policy</h1>
                <p className='text-base font-regular'>
                    Last updated: July 03, 2024
                </p>

                <p className='text-base font-regular'>
                    fundfolio {'("we", "our", or "us")'} is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by fundfolio.
                </p>

                <div>
                    <p className='text-lg font-semibold'>Information We Collect</p>
                    <p className='text-base font-regular'>
                        We collect information you provide directly to us when you create an account, including your username, email address, and password. We also collect the transaction data and notes you input into the app.
                    </p>
                </div>

                <div>
                    <p className='text-lg font-semibold'>How We Use Your Information</p>
                    <p className='text-base font-regular'>
                        We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
                    </p>
                </div>

                <div>
                    <p className='text-lg font-semibold'>Data Storage and Security</p>
                    <p className='text-base font-regular'>
                        Your data is stored securely and is only accessible to you through your account. We implement appropriate technical and organizational measures to protect your personal information.
                    </p>
                </div>

                <div>
                    <p className='text-lg font-semibold'>Your Rights</p>
                    <p className='text-base font-regular'>
                        You can access, update, or delete your account information at any time through the app. If you choose to delete your account, all associated data will be permanently removed from our systems.
                    </p>
                </div>

                <div>
                    <p className='text-lg font-semibold'>Changes to This Policy</p>
                    <p className='text-base font-regular'>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </div>

                <div>
                    <p className='text-lg font-semibold'>Contact Us</p>
                    <p className='text-base font-regular'>
                        If you have any questions about this Privacy Policy, please contact us at: mohmdfayisk@gmail.com
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Privacy