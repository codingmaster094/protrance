'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import NextArrow from '../../../../public/images/arrow-left-long.png';
import prevArrow from '../../../../public/images/arrow-right.png';
import { useRef } from "react";
import { motion } from 'framer-motion';

const Protrance = ({ title, ImageArray }) => {

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  let processedSlides = [...ImageArray];
  while (processedSlides.length < 4 && ImageArray.length > 0) {
    processedSlides = [...processedSlides, ...ImageArray];
  }
  return (
    <section>
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className="flex justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div className='h-8 lg:h-[64px]'></div>
        <div className="flex relative">
          <Swiper
            className="w-full  xl:!ms-[120px] xl:!me-[120px] protrance-slider"
            modules={[Pagination, Navigation]}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              1024: { slidePerView: 3 },
            }}
          >
            <div className="swiper-wrapper">
              {processedSlides.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="flex items-center flex-col  border border-black border-opacity-10 rounded-3xl p-6 xl:p-16 text-center gap-4">
                      <div className="border border-[#d8d8d8] rounded-full">
                        <Image
                          src={slide.serviceImage.url}
                          alt={slide.serviceImage.filename}
                          width={800}
                          height={800}
                          className="w-full object-cover"
                        />
                      </div>
                      <Link href="#" aria-label="blog-link" role="link">
                        <h3>{slide.title}</h3>
                      </Link>
                      {slide?.description?.root?.children?.[0]?.children?.[0]
                        ?.text ? (
                        <p>
                          {slide.description.root.children[0].children[0].text}
                        </p>
                      ) : (
                        <ul className="list-disc marker:text-primary ms-5 text-accent1 text-opacity-80 p">
                          {slide?.description?.root?.children?.[0]?.children.map(
                            (li, i) => {
                              return <li key={i}>{li.children[0].text}</li>;
                            }
                          )}
                        </ul>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
            <div className="absolute bottom-0 right-0 justify-center gap-6 pb-1 hidden sm:flex">
              <button
                onClick={goPrev}
              >
                <Image src={prevArrow} alt="Prev arrow" />
              </button>
              <button
                onClick={goNext}
              >
                <Image src={NextArrow} alt="Next arrow" />
              </button>
            </div>
          </Swiper>
        </div>
       </motion.div>
    </section>
  );
}

export default Protrance