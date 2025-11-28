import FooterNav from "~/components/FooterNav";
import type { Route } from "./+types/home";
import HeaderNav from "~/components/HeaderNav";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ene Engineering" },
    { name: "description", content: "Welcome to Ene Engineering!" },
  ];
}

export default function Home() {
  const process = [
    {
      title: "Share Your Design",
      text: "Share CAD files, technical drawings, or sketches - we work with all standard formats and can advise on design optimization"
    },
    {
      title: "Rapid Expert Review",
      text: "Same-day technical assessment by experienced engineers - honest feasibility feedback, optimization suggestions, and transparent quoting"
    },
    {
      title: "Precision Manufacturing",
      text: "Your components are machined by time-served professionals using state-of-the-art CNC equipment combined with traditional craftsmanship"
    },
    {
      title: "Quality Assured Delivery",
      text: "Every part inspected to ISO 9001:2015 standards with full documentation - delivered on time, ready to use"
    },
  ]
  return <>
    <main className="bg-white">
      {/* Header & Hero Section */}
      <HeaderNav />

      <section className="relative h-[90vh] flex items-end justify-start p-10 bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Swiper
            slidesPerView={1}
            effect="fade"
            modules={[EffectFade, Autoplay]}
            speed={900}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src="/images/ene-engineering-hero-1.jpg" alt="Precision Engineering" className="object-cover w-full h-full transition-transform duration-700 scale-100 swiper-slide-active:scale-95" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ene-engineering-hero-2.jpg" alt="Precision Engineering" className="object-cover w-full h-full transition-transform duration-700 scale-100 swiper-slide-active:scale-95" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ene-engineering-hero-3.jpg" alt="Precision Engineering" className="object-cover w-full h-full transition-transform duration-700 scale-100 swiper-slide-active:scale-95" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="bg-black opacity-70 absolute inset-0 z-10"></div>
        <div className="relative z-10 text-white mb-10">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">Excellence in precision<br />engineering & <br /> manufacturing</h1>
          <button className="bg-white text-black px-6 py-3 rounded-full transition">Request A Quote</button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-xs mb-6">WE ARE ENE ENGINEERING</h2>
        <p className="text-5xl font-light mb-12">At ENE Engineering, we help industries worldwide innovate faster and operate more efficiently through advanced precision engineering.</p>
      </section>

      <div className="max-w-7xl mx-auto">
        <video className="w-full mb-20" autoPlay loop muted>
          <source src="/images/ene-engineering-video.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="mb-20 max-w-full lg:pl-20">
        <h3 className="text-5xl font-bold mb-8">Our Services</h3>

      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <h3 className="text-5xl font-bold mb-8">Why ENE</h3>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: "Client-Centric",
              text: "We don't just serve clients; we dedicate our resources and efforts to your specific goals, ensuring your needs drive every decision we make."
            },
            {
              title: "Proven Expertise & Quality",
              text: "Our team has the specific skills and experience to deliver high-quality results—reliably. We deliver quality."
            },
            {
              title: "Unwavering Support & Partnership",
              text: "We are committed to your long-term success, offering dedicated support and communication. We are committed to you."
            }
          ].map((reason, index) => <div key={index} className="p-8 border-t bg-[#F0F0F0] border-black">
            <img src="/images/icons/arrow-down-right-light1.svg" className="mb-8" alt="" />
            <h4 className="text-xl lg:w-[60%] mb-12">{reason.title}</h4>
            <p className="text-sm text-[#646569]">{reason.text}</p>
          </div>)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <h3 className="text-5xl font-bold mb-8">Industries Served</h3>
        <div className="border-t border-[#000000] grid grid-cols-3">
          {[
            { icon: "/images/icons/airplane-light1.svg", label: "Aerospace" },
            { icon: "/images/icons/car-profile-light1.svg", label: "Automotive" },
            { icon: "/images/icons/hospital-light1.svg", label: "Medical" },
            { icon: "/images/icons/drop-half-bottom-light1.svg", label: "Oil & Gas" },
            { icon: "/images/icons/solar-panel-light1.svg", label: "Green Energy" },
            { icon: "/images/icons/medal-military-light1.svg", label: "Defense" },
          ].map((industry, idx) => (
            <div key={industry.label} className="border-b border-black flex gap-8 px-4 py-8">
              <img src={industry.icon} alt="" />
              <p className="text-3xl">{industry.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-20 bg-[#F0F0F0] mb-20">
        <h3 className="text-5xl font-bold mb-8">Our Process</h3>

        <div className="grid grid-cols-4 gap-6">
          {process.map((single, index) => <div key={index}>
            <p className="text-xl lg:w-[60%] mb-4">{single.title}</p>
            <p className="text-sm">{single.text}</p>
          </div>)}
        </div>
      </section>

      <FooterNav />
    </main>
  </>;
}
