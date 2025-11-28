import React from 'react';

const HeroComp = ({image, title}:{image: string, title: string}) => {
    return (
        <section className="relative lg:h-[90vh] h-[60vh]">
            <div className="bg-black opacity-70 absolute inset-0 z-10"></div>
            <img src={image} alt="Hero" className="object-cover w-full h-full transition-transform duration-700 scale-100 swiper-slide-active:scale-95" />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
                <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">{title}</h1>
            </div>
        </section>
    );
};

export default HeroComp;