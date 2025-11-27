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
    <main className="bg-white font-sans">
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
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">Request A Quote</button>
        </div>
      </section>

      <FooterNav />
    </main>
  </>;
}
