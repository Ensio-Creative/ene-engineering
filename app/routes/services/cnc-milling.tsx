import React from 'react';
import { Link } from 'react-router';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import type { Route } from './+types/cnc-milling';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "CNC Milling - ENE Engineering" },
        { name: "description", content: "CNC Milling services by ENE Engineering!" },
    ];
}

export default function CncMilling() {
    return (
        <>
            <HeaderNav />
            <main>
                <div>
                    <h1 className="lg:text-5xl text-4xl px-4 font-bold mb-6 lg:px-10 lg:mt-20 mt-10">CNC Milling</h1>
                    <img src="/images/services/ene-engineering-cnc-milling-services-header.jpg" alt="CNC Milling" className="w-full lg:h-full h-[50vh] object-cover mb-12" />
                </div>

                <section className="max-w-7xl mx-auto px-4 lg:py-20 py-10">
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <div className='my-auto lg:text-lg text-[#646569]'>
                            Our comprehensive CNC milling services are designed to transform your most ambitious designs into tangible, high-quality components. Whether you're developing straightforward prototypes for initial testing or engineering intricate precision parts with complex geometries, we have the advanced machining capabilities to meet your exact specifications.
                            <br /> <br />
                            We operate a full range of cutting-edge equipment, including 3-axis, 4-axis, and 5-axis CNC machines, each configured in both vertical and horizontal orientations. This extensive machinery lineup provides us with exceptional flexibility to tackle virtually any manufacturing challenge, from simple flat components to complex sculptured surfaces with compound angles and tight tolerances.
                            <br /> <br />
                            Our versatile setup allows us to efficiently process an impressive variety of part geometries, sizes, and materials while consistently maintaining superior dimensional accuracy throughout production. By leveraging the right combination of machine configurations and tooling strategies for each unique project, we optimize both quality and efficiency, delivering precision-machined components with remarkably fast turnaround times that keep your projects on schedule.
                        </div>
                        <div>
                            <img src="/images/ene-engineering-cnc-milling-services.jpg" alt="" />
                        </div>
                    </div>

                </section>

                {/* Other Services Section */}
                <section className="max-w-7xl mx-auto px-4 lg:py-20 py-10">
                    <h2 className="lg:text-5xl text-3xl font-bold mb-8">Other Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
