"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerData from "./bannerData";
import BannerSlide from "./BannerSlide";

export default function Banner() {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}