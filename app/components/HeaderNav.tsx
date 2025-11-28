import React from 'react';
import { Link } from 'react-router';

const HeaderNav = () => {
    return (
        <header className="w-full">
            <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#EBEBEB]">
                <img src="/images/ene-engineering-logo.svg" alt="ENE Engineering Logo" />
                <ul className="flex space-x-10 text-sm">
                    <Link to="/">
                        <li className="cursor-pointer">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="cursor-pointer">About us</li>
                    </Link>
                    {/* <Link to="/services"> */}
                    <li className="cursor-pointer">Services</li>
                    {/* </Link> */}
                    <Link to="/industries">
                        <li className="cursor-pointer">Industries</li>
                    </Link>
                    <Link to="/contact">
                        <li className="cursor-pointer">Contact us</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;