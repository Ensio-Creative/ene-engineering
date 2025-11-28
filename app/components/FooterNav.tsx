import React from 'react';
import { Link } from 'react-router';

const FooterNav = () => {
    return (
        <div>
            <section className="relative py-44 bg-black">
                <div className="absolute inset-0 w-full h-full">
                    <img src="/images/ene-engineering-cta.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="relative z-10 flex justify-center items-center">
                    <div className="bg-white opacity-50 shadow h-[35vh] text-center w-full max-w-lg mx-auto"></div>
                    <div className='absolute text-center max-w-lg mx-auto'>
                        <h3 className="text-2xl font-bold mb-4">Ready for your project?</h3>
                        <p className="text-lg mb-6">Our engineers are standing by <br /> to provide honest technical feedback and <br /> transparent quotes.</p>
                        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow transition">Let's get started</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white py-16 lg:px-10 px-4">
                <div className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:border-none border-x px-4 lg:px-0 border-white">
                    <div className='lg:border-x flex flex-col lg:col-span-1 col-span-2 justify-between border-white px-6'>
                        <img className='lg:w-44 w-20' src="/images/ene-engineering-footer-logo.svg" alt="ENE Engineering Logo" />
                        <span className='text-[#949494] lg:block hidden text-xs'>© 2025 ENE Engineering. All rights reserved.</span>
                    </div>
                    <div className='lg:border-r border-white'>
                        <h4 className="text-sm lg:mb-6 mb-4">Explore</h4>
                        <ul className="space-y-3 lg:text-base text-sm">
                            <li><Link to="/about" className="">About us</Link></li>
                            <li><Link to="/" className="">Services</Link></li>
                            <li><Link to="/#industries" className="">Industries</Link></li>
                            <li><Link to="/contact" className="">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className='lg:border-r border-white'>
                        <h4 className="text-sm lg:mb-6 mb-4">Services</h4>
                        <ul className="space-y-3 lg:text-base text-sm">
                            <li><Link to="/services/cnc-milling" className="">CNC Milling</Link></li>
                            <li><Link to="/services/cnc-turning" className="">CNC Turning</Link></li>
                            <li><Link to="/services/5-axis-cnc-machining" className="">5-Axis CNC Machining</Link></li>
                            <li><Link to="/services/finishing" className="">Finishing</Link></li>
                        </ul>
                    </div>
                    <div className='lg:border-r border-white lg:col-span-1 col-span-2'>
                        <h4 className="text-sm lg:mb-6 mb-4">Get In Touch</h4>
                        <address className="not-italic leading-relaxed lg:text-base text-sm">
                            CNC Unit G1,<br />
                            Kingston Business Park,<br />
                            Kingston Bagpuize,<br />
                            Nr. Abingdon, Oxfordshire OX13 5FE<br />
                            <br />
                            +44(0) 1865 821 878
                        </address>
                        <span className='text-[#949494] block lg:hidden text-xs mt-10'>© 2025 ENE Engineering. All rights reserved.</span>
                        <span className='text-xs text-[#949494]'>Site by Ensio Creative</span>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default FooterNav;