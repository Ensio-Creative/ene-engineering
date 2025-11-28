import React from 'react';
import { Link } from 'react-router';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import type { Route } from './+types/finishing';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "5-Axis CNC Machining - Ene Engineering" },
        { name: "description", content: "5-Axis CNC Machining services by Ene Engineering!" },
    ];
}

export default function Finishing() {
    return (
        <>
            <HeaderNav />
            <main>
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold mb-6 lg:px-10 px-4 mt-20">Finishing</h1>
                    <img src="/images/services/ene-engineering-cnc-finishing-services-header.jpg" alt="Finishing" className="w-full lg:h-full h-[50vh] object-cover mb-12" />
                </div>



                <section className="max-w-7xl mx-auto px-4 py-20">
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <div className='my-auto lg:text-lg text-[#646569]'>
                            We understand that exceptional machining is only part of the equation, your components need to arrive ready for immediate use. That's why we offer comprehensive finishing services that transform precision-machined parts into complete, application-ready products.
                            <br /> <br />
                            Through our network of trusted supply chain partners, we provide end-to-end solutions that go far beyond the machine shop floor. Our finishing capabilities include surface treatments, coatings, anodizing, plating, powder coating, and polishing to meet your exact aesthetic and functional requirements. We also coordinate quality inspection, performance testing, and assembly services when your project demands fully integrated components.
                            <br /> <br />
                            This turnkey approach eliminates the hassle of managing multiple vendors and ensures seamless coordination throughout the entire production process. You receive finished parts that are inspection-certified, properly treated, and ready to install, saving you valuable time and streamlining your supply chain from a single, reliable source.
                            <br /> <br />
                            Some of the finishing services we provide are:
                            <br /> <br />
                            <ul className='list-disc ml-6 space-y-2'>
                                <li>Chromic Anodising</li>
                                <li>Sulphuric Anodising</li>
                                <li>Hard Anodising</li>
                                <li>Alcocrom</li>
                                <li>Surtec</li>
                                <li>Zinc plate</li>
                                <li>Cadmium plate</li>
                                <li>Electropolish</li>
                            </ul>
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
                        <Link to="/services/cnc-turning" className="bg-[#F0F0F0] border-l border-black p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">CNC Turning</span>
                                <img src="/images/icons/arrow-down-right-light-11.svg" alt="" />
                            </div>
                        </Link>
                        <Link to="/services/5-axis-cnc-machining" className="bg-[#F0F0F0] border-l border-black p-8">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold">5-Axis CNC Machining</span>
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
