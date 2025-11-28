import React, { useRef, useEffect } from 'react';
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
  const industryList = [
    { name: "Aerospace", image: "ene-engineering-aerospace-industry.jpg", description: "We specialize in working with aluminum and advanced composites, providing precision components for both major aerospace programs, including those used in Boeing planes, and high-specification parts for aircraft serving the private sector." },
    { name: "Automotive", image: "ene-engineering-automotive-industry.jpg", description: "Leveraging the expertise of our skilled engineers, we produce a variety of high-quality automotive parts, all manufactured in strict compliance with industry-leading standards." },
    { name: "Medical", image: "ene-engineering-medical-industry.jpg", description: "We supply precision components to the pharmaceutical industry, drawing on our extensive experience in the sector. Additionally, we provide critical parts utilized by the pathology departments across a network of hospitals." },
    { name: "Oil & Gas", image: "ene-engineering-oil-&-gas-industry.jpg", description: "Leveraging our expertise in API standards, exotic materials, and HPHT environments, we establish a technical partnership with oil and gas clients, seamlessly managing component development from prototyping to full-scale manufacturing, ensuring delivery of reliable, safety-critical parts with guaranteed quality assurance." },
    { name: "Green Energy", image: "ene-engineering-green-energy-industry.jpg", description: "We specialize in the meticulous supply of precision machined components specifically tailored for the demanding requirements of the wind and solar power generation industries. Our extensive expertise encompasses the production of critical parts, ensuring they meet rigorous specifications for durability, performance, and longevity in both turbine and photovoltaic systems. By maintaining stringent quality control standards and utilizing advanced manufacturing techniques, we are dedicated to providing parts that contribute directly to the efficiency, reliability, and successful operation of large-scale renewable energy projects globally." },
    { name: "Defense", image: "ene-engineering-defense-industry.jpg", description: "We’re a trusted supplier of precision-manufactured parts for specialist military vehicles. We maintain a direct and collaborative working relationship with Marshall Land Systems, ensuring the continuous flow of high-quality materials and acting as an integral partner in supporting the defense supply infrastructure." },
  ];

  // Create refs for each industry section
  const industryRefs = useRef(industryList.map(() => React.createRef<HTMLDivElement>()));


  // Track active index for highlighting
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Update activeIdx on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = industryRefs.current.map(ref => {
        if (!ref.current) return Infinity;
        const rect = ref.current.getBoundingClientRect();
        return Math.abs(rect.top - 120); // 120px offset for sticky menu
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActiveIdx(minIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (idx: number) => {
    setActiveIdx(idx);
    const ref = industryRefs.current[idx];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      <HeaderNav />
      <HeroComp title='Industries' image='/images/ene-engineering-industries-header.jpg' />
      <section className='max-w-7xl mx-auto px-6 lg:py-32 py-20'>
        <div className='flex'>
          <div className='lg:w-[30%] space-y-6 text-[#C3C3C3] lg:block hidden sticky top-32 h-fit'>
            {industryList.map((industry, idx) => (
              <button
                key={industry.name}
                className={`border-l text-lg border-[#C3C3C3] pl-4 w-full text-left focus:outline-none transition-colors duration-200 ${activeIdx === idx ? 'text-black font-semibold border-black' : 'hover:text-black'}`}
                onClick={() => handleScrollTo(idx)}
              >
                {industry.name}
              </button>
            ))}
          </div>
          <div className='lg:w-[70%]'>
            {industryList.map((industry, idx) => (
              <div
                key={industry.name}
                ref={industryRefs.current[idx]}
                className='mb-20 scroll-mt-32'
              >
                <img src={`/images/industries/${industry.image}`} alt={industry.name} className='w-full mb-6' />
                <h3 className='text-2xl mb-4'>{industry.name}</h3>
                <p className='text-[#646569]'>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
      <FooterNav />
    </main>
  );
};

export default industries;