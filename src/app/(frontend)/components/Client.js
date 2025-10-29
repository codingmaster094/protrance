'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Client = ({ title, description, LogoImageArray, ReviewImageArray, SectionShow }) => {
  let processedSlides = [...LogoImageArray];
  while (processedSlides.length < 6 && LogoImageArray.length > 0) {
    processedSlides = [...processedSlides, ...LogoImageArray];
  }
  let ReviewsSlides = [...ReviewImageArray];
  while (processedSlides.length < 6 && ReviewImageArray.length > 0) {
    processedSlides = [...processedSlides, ...ReviewImageArray];
  }
  return (
    SectionShow && (
      <section>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
          <div className="flex flex-col text-center gap-4">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
          <Swiper
            className="w-full py-5"
            modules={[Autoplay]}
            loop={true}
            slidesPerView={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >
            {processedSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center p-4 rounded-2xl shadow-[0px_0px_10px_0px_#EDEDED] m-3">
                  {slide.link ? (
                    <Link href={slide.link.url}>
                      <Image
                        src={slide.logosImage.url}
                        alt={slide.title || 'Client Logo'}
                        width={300}
                        height={81}
                        className="w-full h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)] object-contain"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={slide.logosImage.url}
                      alt={slide.title}
                      width={300}
                      height={81}
                      className="w-full h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)] object-contain"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
          <div className="flex">
            <Swiper
              className="w-full client-slider"
              modules={[Pagination, Autoplay]}
              loop={true}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
            >
              {ReviewsSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col [&>p]:text-lg gap-2 border border-black border-opacity-10 rounded-3xl p-6">
                    <h3>{slide.title}</h3>
                    <p>{slide.description?.root.children[0].children[0].text}</p>
                    <div className="flex  items-center gap-2">
                      <Image
                        src={slide.reviewImage.url}
                        alt={slide.reviewImage.filename}
                        width={100}
                        height={100}
                        className="object-cover w-[58px] h-[58px] rounded-full"
                      />
                      <h4 className="text-lg font-semibold font-ubuntu">
                        {slide.profile_name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </motion.div>
      </section>)
  );
};

export default Client