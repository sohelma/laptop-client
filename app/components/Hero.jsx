"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
  const slides = [
    {
      title: "Welcome to Laptop Store",
      subtitle: "Find your perfect laptop for work, gaming, or study.",
      image: "https://res.cloudinary.com/dymjtdylg/image/upload/v1763979922/0416-1024x683_eo6hqs.jpg",
    },
    {
      title: "High-Performance Laptops",
      subtitle: "Powerful machines for professionals.",
      image: "https://res.cloudinary.com/dymjtdylg/image/upload/v1763979633/XPS-family-graphite-v2_uh7zrd.jpg",
    },
    {
      title: "Budget-Friendly Options",
      subtitle: "Affordable laptops for everyone.",
      image: "https://res.cloudinary.com/dymjtdylg/image/upload/v1763979816/aspire-vero_16-03_irj9zp.jpg",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[500px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-2xl text-pink-500 drop-shadow-md mb-6 font-bold">
                {slide.subtitle}
              </p>
              <a
                href="/products"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Shop Now
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
