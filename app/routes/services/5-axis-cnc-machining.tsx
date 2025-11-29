import React from 'react';
import { Link } from 'react-router';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import type { Route } from './+types/5-axis-cnc-machining';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "5-Axis CNC Machining - ENE Engineering" },
        { name: "description", content: "5-Axis CNC Machining services by ENE Engineering!" },
    ];
}

export default function FiveAxisCncMachining() {
    return (
        <>
            <HeaderNav />
            <main>
                <div>
                    <h1 className="lg:text-5xl text-4xl px-4 font-bold mb-6 lg:px-10 lg:mt-20 mt-10">5-Axis CNC Machining </h1>
                    <img src="/images/services/ene-engineering-5-axis-cnc-machining-services-header.jpg" alt="5-Axis CNC Machining" className="w-full lg:h-full h-[50vh] object-cover mb-12" />
                </div>

                <section className="max-w-7xl mx-auto px-4 lg:py-20 py-10">
                    <div className='grid lg:grid-cols-2 gap-10'>
                        <div className='my-auto lg:text-lg text-[#646569]'>
                            Our advanced 5-axis CNC machining services deliver the precision and complexity your most challenging projects demand. When standard 3-axis machining falls short, our 5-axis capabilities unlock new possibilities for intricate geometries, compound angles, and sophisticated features that would otherwise require multiple setups or prove impossible to manufacture.
                            <br /> <br />
                            By adding two rotational axes to traditional three-axis movement, our 5-axis machines provide unrestricted tool access from virtually any angle. This expanded capability allows us to machine complex contoured surfaces, deep cavities, undercuts, and intricate details in a single setup, dramatically improving both accuracy and efficiency.
                            <br /> <br />

                            The fundamental advantage of 5-axis machining is the elimination of repositioning errors, which significantly reduces production time and cost. With shorter, more rigid cutting tools positioned at optimal angles, we achieve:
                            <br /> <br />
                            <ul className='list-disc ml-6 space-y-2'>
                                <li>Superior Surface Finishes: Minimized vibration and optimal tool pathing.</li>
                                <li>Extended Tool Life: Consistent chip load and reduced wear.</li>
                                <li>Exceptional Dimensional Accuracy: Routinely holding tolerances of ±0.001" or tighter.</li>
                            </ul>
                            <br />
                            Our state-of-the-art 5-axis equipment handles everything from complex prototypes to full-scale production runs across highly regulated industries, including:
                            <br /> <br />
                            <ul className='list-disc ml-6 space-y-2'>
                                <li>Aerospace Components</li>
                                <li>Medical Implants</li>
                                <li>Automotive Prototypes</li>
                                <li>Industrial Tooling</li>
                            </ul>
                            <br />
                            We work with a comprehensive range of materials, including aluminum alloys, stainless steel, titanium, tool steels, engineering plastics, and exotic alloys like Inconel and Hastelloy.
                            <br /> <br />
                            Whether you're developing prototypes or scaling to full production, our 5-axis machining expertise ensures your components are manufactured right the first time, delivered on schedule, and ready to perform in the most demanding applications.
                        </div>
                        <div>
                            <img src="/images/ene-engineering-5-axis-cnc-services.jpg" alt="" />
                        </div>
                    </div>

                </section>

                {/* Other Services Section */}
                <section className="max-w-7xl mx-auto px-4 lg:py-20 py-10">
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
