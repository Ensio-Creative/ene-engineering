import React from 'react';
import { Link } from 'react-router';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';

export default function Finishing() {
    return (
        <>
            <HeaderNav />
            <main>
                <div>
                    <h1 className="text-5xl font-bold mb-6 lg:px-10 mt-20">Finishing</h1>
                    <img src="/images/services/ene-engineering-cnc-finishing-services-header.jpg" alt="Finishing" className="w-full object-cover mb-12" />
                </div>
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
