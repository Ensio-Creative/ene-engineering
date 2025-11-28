import React, { useState } from 'react';
import { Link } from 'react-router';

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    return (
        <header className="w-full">
            <nav className="flex items-center justify-between lg:px-10 px-4 py-4 bg-white border-b border-[#EBEBEB]">
                <img src="/images/ene-engineering-logo.svg" alt="ENE Engineering Logo" />
                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-10 text-sm relative">
                    <Link to="/">
                        <li className="cursor-pointer">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="cursor-pointer">About us</li>
                    </Link>
                    <li
                        className="cursor-pointer relative"
                        tabIndex={0}
                        onMouseEnter={() => setServicesOpen(true)}
                    // onMouseLeave={() => setServicesOpen(false)}
                    >
                        <span className="flex items-center gap-1">Services
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                        </span>
                        <ul
                            className={`absolute left-0 top-full px-4 mt-2 w-64 bg-white transition-opacity duration-200 z-30 ${servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <li><Link to="/services/cnc-milling" className="block px-4 py-2 border-b border-black cursor-pointer">CNC Milling</Link></li>
                            <li><Link to="/services/cnc-turning" className="block px-4 py-2 border-b border-black cursor-pointer">CNC Turning</Link></li>
                            <li><Link to="/services/5-axis-cnc-machining" className="block px-4 py-2 border-b border-black cursor-pointer">5-Axis CNC Machining</Link></li>
                            <li><Link to="/services/finishing" className="block px-4 py-2 cursor-pointer">Finishing</Link></li>
                        </ul>
                    </li>
                    <Link to="/industries">
                        <li className="cursor-pointer">Industries</li>
                    </Link>
                    <Link to="/contact">
                        <li className="cursor-pointer">Contact us</li>
                    </Link>
                </ul>
                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </nav>
            {/* Mobile Slide-out Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 pt-6 animate-slidein">
                    <div className="flex items-center justify-between mb-8">
                        <img src="/images/ene-engineering-logo.svg" alt="ENE Engineering Logo" />
                        <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" /></svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 text-2xl font-normal">
                        <li className="border-b border-black pb-2"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="border-b border-black pb-2"><Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link></li>
                        <li className="border-b border-black pb-2 flex items-center justify-between">
                            <button
                                type="button"
                                className="flex items-center w-full justify-between"
                                aria-haspopup="true"
                                aria-expanded={mobileServicesOpen}
                                onClick={() => setMobileServicesOpen((open) => !open)}
                            >
                                <span>Services</span>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    {mobileServicesOpen ? (
                                        <path d="M6 15l6-6 6 6" />
                                    ) : (
                                        <path d="M6 9l6 6 6-6" />
                                    )}
                                </svg>
                            </button>
                        </li>
                        {mobileServicesOpen && (
                            <ul className="flex flex-col text-xl font-normal mb-2 ml-2">
                                <li><Link to="/services/cnc-milling" className="block py-2 flex gap-3" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>
                                    <svg className='my-auto' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.74904 1.14649e-05L7.84279 1.15376e-05C7.93603 1.15387e-05 8.02545 0.0370513 8.09138 0.102982C8.15732 0.168912 8.19436 0.258334 8.19436 0.351574L8.19436 6.44532C8.19436 6.53856 8.15732 6.62798 8.09138 6.69392C8.02545 6.75985 7.93603 6.79689 7.84279 6.79689C7.74955 6.79689 7.66013 6.75985 7.5942 6.69392C7.52827 6.62798 7.49123 6.53856 7.49123 6.44532L7.49123 1.20001L0.59123 8.10001C0.524586 8.16211 0.436439 8.19592 0.345361 8.19431C0.254282 8.1927 0.167383 8.15581 0.10297 8.0914C0.0385579 8.02698 0.00166175 7.94008 5.47763e-05 7.84901C-0.0015522 7.75793 0.0322554 7.66978 0.0943554 7.60314L6.99435 0.703137L1.74904 0.703137C1.6558 0.703137 1.56638 0.666097 1.50045 0.600166C1.43452 0.534235 1.39748 0.444814 1.39748 0.351574C1.39748 0.258334 1.43452 0.168912 1.50045 0.102982C1.56638 0.0370512 1.6558 1.14638e-05 1.74904 1.14649e-05Z" fill="black" />
                                    </svg>

                                    CNC Milling</Link></li>
                                <li><Link to="/services/cnc-turning" className="block py-2 flex gap-3" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>
                                    <svg className='my-auto' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.74904 1.14649e-05L7.84279 1.15376e-05C7.93603 1.15387e-05 8.02545 0.0370513 8.09138 0.102982C8.15732 0.168912 8.19436 0.258334 8.19436 0.351574L8.19436 6.44532C8.19436 6.53856 8.15732 6.62798 8.09138 6.69392C8.02545 6.75985 7.93603 6.79689 7.84279 6.79689C7.74955 6.79689 7.66013 6.75985 7.5942 6.69392C7.52827 6.62798 7.49123 6.53856 7.49123 6.44532L7.49123 1.20001L0.59123 8.10001C0.524586 8.16211 0.436439 8.19592 0.345361 8.19431C0.254282 8.1927 0.167383 8.15581 0.10297 8.0914C0.0385579 8.02698 0.00166175 7.94008 5.47763e-05 7.84901C-0.0015522 7.75793 0.0322554 7.66978 0.0943554 7.60314L6.99435 0.703137L1.74904 0.703137C1.6558 0.703137 1.56638 0.666097 1.50045 0.600166C1.43452 0.534235 1.39748 0.444814 1.39748 0.351574C1.39748 0.258334 1.43452 0.168912 1.50045 0.102982C1.56638 0.0370512 1.6558 1.14638e-05 1.74904 1.14649e-05Z" fill="black" />
                                    </svg>
                                    CNC Turning</Link></li>
                                <li><Link to="/services/5-axis-cnc-machining" className="block py-2 flex gap-3" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>
                                    <svg className='my-auto' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.74904 1.14649e-05L7.84279 1.15376e-05C7.93603 1.15387e-05 8.02545 0.0370513 8.09138 0.102982C8.15732 0.168912 8.19436 0.258334 8.19436 0.351574L8.19436 6.44532C8.19436 6.53856 8.15732 6.62798 8.09138 6.69392C8.02545 6.75985 7.93603 6.79689 7.84279 6.79689C7.74955 6.79689 7.66013 6.75985 7.5942 6.69392C7.52827 6.62798 7.49123 6.53856 7.49123 6.44532L7.49123 1.20001L0.59123 8.10001C0.524586 8.16211 0.436439 8.19592 0.345361 8.19431C0.254282 8.1927 0.167383 8.15581 0.10297 8.0914C0.0385579 8.02698 0.00166175 7.94008 5.47763e-05 7.84901C-0.0015522 7.75793 0.0322554 7.66978 0.0943554 7.60314L6.99435 0.703137L1.74904 0.703137C1.6558 0.703137 1.56638 0.666097 1.50045 0.600166C1.43452 0.534235 1.39748 0.444814 1.39748 0.351574C1.39748 0.258334 1.43452 0.168912 1.50045 0.102982C1.56638 0.0370512 1.6558 1.14638e-05 1.74904 1.14649e-05Z" fill="black" />
                                    </svg>

                                    5-Axis CNC Machining</Link></li>
                                <li><Link to="/services/finishing" className="block py-2 flex gap-3" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>
                                    <svg className='my-auto' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.74904 1.14649e-05L7.84279 1.15376e-05C7.93603 1.15387e-05 8.02545 0.0370513 8.09138 0.102982C8.15732 0.168912 8.19436 0.258334 8.19436 0.351574L8.19436 6.44532C8.19436 6.53856 8.15732 6.62798 8.09138 6.69392C8.02545 6.75985 7.93603 6.79689 7.84279 6.79689C7.74955 6.79689 7.66013 6.75985 7.5942 6.69392C7.52827 6.62798 7.49123 6.53856 7.49123 6.44532L7.49123 1.20001L0.59123 8.10001C0.524586 8.16211 0.436439 8.19592 0.345361 8.19431C0.254282 8.1927 0.167383 8.15581 0.10297 8.0914C0.0385579 8.02698 0.00166175 7.94008 5.47763e-05 7.84901C-0.0015522 7.75793 0.0322554 7.66978 0.0943554 7.60314L6.99435 0.703137L1.74904 0.703137C1.6558 0.703137 1.56638 0.666097 1.50045 0.600166C1.43452 0.534235 1.39748 0.444814 1.39748 0.351574C1.39748 0.258334 1.43452 0.168912 1.50045 0.102982C1.56638 0.0370512 1.6558 1.14638e-05 1.74904 1.14649e-05Z" fill="black" />
                                    </svg>
                                    Finishing</Link></li>
                            </ul>
                        )}
                        <li className="border-b border-black pb-2"><Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
                        <li className="border-b border-black pb-2"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
                    </ul>
                    <div className="mt-12 text-lg">
                        <p className="mb-2">+44(0) 1865 821 878</p>
                        <p>enquiries@ene-eng.com</p>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes slidein {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slidein {
                    animation: slidein 0.3s cubic-bezier(.4,0,.2,1) both;
                }
            `}</style>
        </header>
    );
};

export default HeaderNav;