import React from 'react';
import { Link } from 'react-router';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import type { Route } from './+types/cnc-turning';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "CNC Turning - Ene Engineering" },
        { name: "description", content: "CNC Turning services by Ene Engineering!" },
    ];
}

export default function CncTurning() {
    return (
        <>
            <HeaderNav />
            <main>
                <div>
                    <h1 className="lg:text-5xl text-4xl px-4 font-bold mb-6 lg:px-10 mt-20">CNC Turning </h1>
                    <img src="/images/services/ene-engineering-cnc-turning-services-header.jpg" alt="CNC Turning" className="w-full lg:h-full h-[50vh] object-cover mb-12" />
                </div>

                <section className="max-w-7xl mx-auto px-4 py-20">
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <div className='my-auto lg:text-lg text-[#646569]'>
                            As an ISO 9001:2015 certified manufacturer, we deliver precision CNC turning services to clients across the globe, backed by more than 15 years of hands-on expertise in the industry. Our advanced turning capabilities ensure every component meets rigorous quality standards with exceptional consistency from first article to final production run.
                            <br /> <br />
                            We specialize in custom turned parts across the entire project spectrum, from initial prototype development through high-volume  manufacturing. Our state-of-the-art precision CNC lathes handle everything from straightforward cylindrical components to highly complex geometries requiring tight tolerances and intricate features. Equipped with live tooling technology, our machines seamlessly integrate secondary operations such as axial and radial drilling, precision grooving, slot milling, and flat machining, all performed in a single setup to maximize accuracy and repeatability while minimizing lead times.
                            <br /> <br />
                            Our comprehensive turning services support businesses at every stage of growth. Whether you're an innovative startup bringing your first product to market or an established global manufacturer seeking a dependable production partner, we provide the engineering expertise, rapid turnaround times, and cost-effective solutions your CNC turning projects demand. Our team works closely with you to optimize designs for manufacturability, reduce costs, and ensure your components arrive on time and within specification.
                        </div>
                        <div>
                            <img src="/images/ene-engineering-cnc-turning-services.jpg" alt="" />
                        </div>
                    </div>

                </section>

                {/* Other Services Section */}
                <section className="max-w-7xl mx-auto px-4 py-20">
                    <h2 className="lg:text-5xl text-3xl font-bold mb-8">Other Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/services/cnc-milling" className="bg-[#F0F0F0] border-l border-black p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">CNC Milling</span>
                                <img src="/images/icons/arrow-down-right-light-11.svg" alt="" />
                            </div>
                        </Link>
                        <Link to="/services/5-axis-cnc-machining" className="bg-[#F0F0F0] border-l border-black p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">5-Axis CNC Machining</span>
                                <img src="/images/icons/arrow-down-right-light-11.svg" alt="" />
                            </div>
                        </Link>
                        <Link to="/services/finishing" className="bg-[#F0F0F0] border-l border-black p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">Finishing</span>
                                <img src="/images/icons/arrow-down-right-light-11.svg" alt="" />
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <FooterNav />
        </>
    );
}
