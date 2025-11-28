import React from 'react';
import FooterNav from '~/components/FooterNav';
import HeaderNav from '~/components/HeaderNav';
import HeroComp from '~/components/HeroComp';
import type { Route } from './+types/industries';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: " Industries - Ene Engineering" },
    { name: "description", content: "Explore the industries we serve at Ene Engineering!" },
  ];
}

const industries = () => {
    return (
        <main>
            <HeaderNav />
            <HeroComp title='Industries' image='/images/ene-engineering-industries-header.jpg' />
            <h1>Our Industries</h1>
            <p>Discover the various industries we serve.</p>
            <FooterNav />
        </main>
    );
};

export default industries;