import FooterNav from "~/components/FooterNav";
import type { Route } from "./+types/home";
import HeaderNav from "~/components/HeaderNav";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
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

      <section className="relative lg:h-[90vh] h-[70vh] flex items-end justify-start lg:p-10 p-4 bg-black">
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
        <p className="lg:text-5xl text-3xl font-light mb-12">At ENE Engineering, we help industries worldwide innovate faster and operate more efficiently through advanced precision engineering.</p>
      </section>

      <main className="lg:mx-0 mx-4">
        <div className="max-w-7xl mx-auto">
          <video className="w-full mb-20" autoPlay loop muted>
            <source src="/images/ene-engineering-video.mp4" type="video/mp4" />
          </video>
        </div>

        <section className="mb-20 max-w-full lg:pl-20">
          <h3 className="lg:text-5xl text-3xl font-bold mb-8">Our Services</h3>

          <div className="relative">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
                1024: {
                  slidesPerView: 3.2,
                },
              }}
              navigation={{
                nextEl: '.custom-swiper-next',
                prevEl: '.custom-swiper-prev',
              }}
              modules={[Navigation]}
              className="w-full h-full"
            >
              {[
                {
                  title: "CNC Milling",
                  image: "/images/services/ene-engineering-cnc-milling-services-homepage.jpg"
                },
                {
                  title: "CNC Turning",
                  image: "/images/services/ene-engineering-cnc-turnung-services-homepage.jpg"
                },
                {
                  title: "5-Axis CNC Machining",
                  image: "/images/services/ene-engineering-5-axis-cnc-machining-services-homepage.jpg"
                },
                {
                  title: "Finishing",
                  image: "/images/services/ene-engineering-cnc-finishing-services-homepage.jpg"
                },
              ].map((service, index) => (
                <SwiperSlide key={index} className="relative">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <img src={service.image} alt={service.title} className="w-full" />
                  <div className="absolute flex flex-col justify-between left-0 bottom-0 top-0 z-10 p-6 text-white">
                    <h4 className="text-2xl font-semibold">{service.title}</h4>
                    <img className="w-10" src="/images/icons/arrow-right.svg" alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-6 justify-end lg:mr-20 mt-6">
              <button className="custom-swiper-prev">
                <img src="/images/icons/left-icon.svg" alt="Previous" className="lg:w-16 w-10 rounded-full lg:h-16 h-10" />
              </button>
              <button className="custom-swiper-next">
                <img src="/images/icons/right-icon.svg" alt="Next" className="lg:w-16 w-10 rounded-full lg:h-16 h-10" />
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-20">
          <h3 className="lg:text-5xl text-3xl font-bold mb-8">Why ENE</h3>
          <div className="grid lg:grid-cols-3 gap-6">
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
          <h3 className="lg:text-5xl text-3xl font-bold mb-8">Industries Served</h3>
          <div className="border-t border-[#000000] grid lg:grid-cols-3">
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
                <p className="lg:text-3xl text-xl">{industry.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto lg:p-20 lg:bg-[#F0F0F0] mb-20">
          <h3 className="lg:text-5xl text-3xl font-bold mb-10">Our Process</h3>
          {/* Mobile slider */}
          <div className="block lg:hidden">
            {/* Custom pagination state and swiper control */}
            {(() => {
              const [activeIdx, setActiveIdx] = React.useState(0);
              const swiperRef = React.useRef<any>(null);
              return (
                <>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    onSlideChange={swiper => setActiveIdx(swiper.activeIndex)}
                    onSwiper={swiper => { swiperRef.current = swiper; }}
                    className="w-full"
                  >
                    {process.map((single, index) => (
                      <SwiperSlide key={index} className="">
                        <div className="bg-[#F0F0F0] p-6">
                          <p className="text-3xl w-[80%] mb-4">{single.title}</p>
                          <p className="text-[#646569] mt-12">{single.text}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex justify-between gap-2 mt-6">
                    {process.map((single, idx) => (
                      <button
                        key={idx}
                        className={`w-20 h-1 transition-all duration-200 ${activeIdx === idx ? 'bg-black' : 'bg-gray-300'}`}
                        aria-label={single.title}
                        onClick={() => {
                          setActiveIdx(idx);
                          if (swiperRef.current) {
                            swiperRef.current.slideTo(idx);
                          }
                        }}
                        style={{ outline: 'none', border: 'none' }}
                      />
                    ))}
                  </div>
                </>
              );
            })()}

          </div>
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {process.map((single, index) => <div key={index}>
              <p className="text-2xl lg:w-[70%] mb-8">{single.title}</p>
              <p className="text-sm text-[#646569]">{single.text}</p>
            </div>)}
          </div>
        </section>
      </main>
      <FooterNav />
    </main>
  </>;
}
