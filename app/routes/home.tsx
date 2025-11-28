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

      <FooterNav />
    </main>
  </>;
}
