import React from 'react';

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
            <footer className="bg-black text-white py-16 lg:px-10">
                <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className='border-x flex flex-col justify-between border-white px-6'>
                        <img className='w-44' src="/images/ene-engineering-footer-logo.svg" alt="ENE Engineering Logo" />
                        <span className='text-[#949494] text-xs'>© 2025 ENE Engineering. All rights reserved.</span>
                    </div>
                    <div className='border-r border-white'>
                        <h4 className="text-xs mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li>About us</li>
                            <li>Services</li>
                            <li>Industries</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='border-r border-white'>
                        <h4 className="text-xs mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li>CNC Milling</li>
                            <li>CNC Turning</li>
                            <li>5-Axis CNC Machining</li>
                            <li>Finishing</li>
                        </ul>
                    </div>
                    <div className='border-r border-white'>
                        <h4 className="text-xs mb-6">Get In Touch</h4>
                        <address className="not-italic leading-relaxed">
                            CNC Unit G1,<br />
                            Kingston Business Park,<br />
                            Kingston Bagpuize,<br />
                            Nr. Abingdon, Oxfordshire OX13 5FE<br />
                            <br />
                            +44(0) 1865 821 878
                        </address>
                        <span className='text-xs text-[#949494]'>Site by Ensio Creative</span>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default FooterNav;