import React from 'react';

const HeaderNav = () => {
    return (
        <header className="w-full">
            <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#EBEBEB]">
                <img src="/images/ene-engineering-logo.svg" alt="ENE Engineering Logo" />
                <ul className="flex space-x-8 text-sm font-medium">
                    <li className="hover:text-gray-700 cursor-pointer">Home</li>
                    <li className="hover:text-gray-700 cursor-pointer">About us</li>
                    <li className="hover:text-gray-700 cursor-pointer">Services</li>
                    <li className="hover:text-gray-700 cursor-pointer">Industries</li>
                    <li className="hover:text-gray-700 cursor-pointer">Contact us</li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;