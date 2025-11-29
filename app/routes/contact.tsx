import React from 'react';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import type { Route } from './+types/contact';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us - ENE Engineering" },
        { name: "description", content: "Get in touch with ENE Engineering!" },
    ];
}

const contact = () => {
    return (
        <main>
            <HeaderNav />
            <main className='max-w-full lg:px-10 px-4'>
                <div className='my-20'>
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight mb-6'>How can we help you? <br />
                        We'd love to hear <br />
                        from you</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='lg:border-x border-black px-4 mb-8 lg:mb-0'>
                        <p className='text-3xl mb-4 lg:mb-0'>Contact us</p>
                    </div>
                    <div className='lg:border-r border-black px-4 mb-8 lg:mb-0'>
                        <p className='lg:text-3xl text-xl mb-4 lg:mb-0'>Location</p>
                        <p className='text-[#646569] mt-4 lg:mt-10'>Unit G1, Kingston Business Park, <br /> Kingston Bagpuize, Nr. Abingdon <br /> Oxfordshire, OX13 5FE</p>
                    </div>
                    <div className='lg:border-r border-black px-4'>
                        <p className='text-3xl mb-4 lg:mb-0'>Contact Details</p>
                        <p className='text-[#646569] mt-4 lg:mt-10'>Tel: +44(0) 1865 821 878 <br />Fax: +44(0) 5600 760 180 <br />
                            enquiries@ene-eng.com</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 mb-32'>
                    <div className='lg:border-x border-black px-4 mb-8 lg:mb-0'>
                        <p className='text-3xl mb-4 lg:mb-0'>Find us on the map</p>
                    </div>
                    <div className='lg:border-r border-black px-4 col-span-1 lg:col-span-2'>
                        <img src="/images/map.jpg" className='w-full lg:pr-2' alt="" />
                    </div>
                </div>
            </main>
            <FooterNav />
        </main>
    );
};

export default contact;