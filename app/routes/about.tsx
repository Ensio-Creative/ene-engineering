import React from 'react';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';

const about = () => {
    return (
        <main>
            <HeaderNav />
            <h1>About Us</h1>
            <p>Learn more about our company and values.</p>
            <FooterNav />
        </main>
    );
};

export default about;