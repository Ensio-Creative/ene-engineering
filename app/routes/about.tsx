import React from 'react';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import HeroComp from '~/components/HeroComp';
import type { Route } from './+types/about';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Us - Ene Engineering" },
    { name: "description", content: "Learn more about Ene Engineering!" },
  ];
}

const about = () => {
    return (
        <main>
            <HeaderNav />
            <HeroComp title='About Us' image='/images/ene-engineering-about-us-header.jpg' />
            <section className='max-w-7xl mx-auto grid grid-cols-2 gap-8 my-32'>
                <img src="/images/ene-engineering-about-us-1.jpg" alt="" />
                <div className='my-auto'>
                    <h1 className='text-5xl font-bold mb-8'>Who We Are</h1>
                    <p>ENE Engineering specializes in high-precision CNC machining services for demanding sectors worldwide. We serve aerospace, medical technology, automotive, oil and gas, defense, and green energy industries.
                        <br /> <br />
                        Our capabilities span both conventional and specialized materials including aluminum, stainless steel, super duplex, Monel, Inconel, titanium, Hastelloy, brass, bronze, and technical polymers.
                        <br /> <br />
                        Our experienced engineering team brings proven expertise to every CNC machining project, ensuring the exacting standards and dependability your applications require.
                    </p>
                </div>
            </section>
            <section className='bg-[#F0F0F0] py-32'>
                <div className='max-w-7xl mx-auto'>
                    <h3 className='text-5xl font-bold mb-8'>Our Ethos</h3>
                    <div className='grid grid-cols-3 gap-6'>
                        {[
                            {
                                title: "Excellence in Service",
                                text: "Excellence drives everything we do. Whether our team is cleaning your space or planning our next strategic move, we hold ourselves to the highest standards—no exceptions. You can count on us to consistently deliver service that goes beyond what you expect."
                            },
                            {
                                title: "Versatility in Solutions",
                                text: "Every client has different needs, and we design our services around yours. We adapt to your specific requirements, whether they're straightforward or constantly evolving. Our approach is flexible by design—built to fit your business, not the other way around."
                            },
                            {
                                title: "Innovation at the Forefront",
                                text: "Innovation keeps us ahead. We embrace new technology in facilities management and lead the way in sustainable practices. While others react to change, we anticipate it—constantly evolving our services to stay relevant today and ready for tomorrow."
                            },
                            {
                                title: "Inclusivity in Practice",
                                text: "Our strength comes from our people. We build teams with diverse perspectives and backgrounds because different viewpoints make us sharper and more creative. When everyone feels valued and empowered, we better understand and serve the varied needs of our clients."
                            },
                            {
                                title: "Sustainability as a Standard",
                                text: "Sustainability isn't optional—it's essential. We use chemical-free cleaning methods, maintain zero-to-landfill operations, and embed environmental responsibility into everything we do. We're not just minimizing harm; we're actively protecting the planet for the next generation."
                            },
                            {
                                title: "Partnership beyond Contract",
                                text: "We're partners, not just service providers. Your success matters to us, so we work alongside you to achieve your goals. We don't just show up to complete a job—we take you through every journey of our services."
                            }
                        ].map((single, index) => <div key={index} className='p-10 bg-black text-white'>
                            <img className='mb-8' src="/images/icons/check-circle-light1.svg" alt="" />
                            <p className='text-xl mb-10 lg:w-[50%]'>{single.title}</p>
                            <p>{single.text}</p>
                        </div>)}
                    </div>
                </div>
            </section>
            <FooterNav />
        </main>
    );
};

export default about;