import React from 'react';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';

const contact = () => {
    return (
        <main>
            <HeaderNav />
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <FooterNav />
        </main>
    );
};

export default contact;