'use client';
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
const Benefits = ({
	title,
description,
ImageArray
}) => {
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
        <div className="flex flex-col text-center gap-4 max-w-[1440px] mx-auto">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
        <div className="flex relative">
          <Swiper
            className="w-full card-slider !ms-[50px] !me-[50px] xl:!ms-[120px] xl:!me-[120px] !static"
            modules={[Navigation]}
            loop={false}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <div className="swiper-wrapper">
              {processedSlides.map((slide , i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center justify-center rounded-[32px] overflow-hidden relative flex-col">
                    <div className="flex h-[294px] w-full rounded-[32px] overflow-hidden">
                      <Image
                        src={slide.serviceImage.url}
                        alt={slide.serviceImage.filename}
                        width={800}
                        height={800}
                        className="w-full object-cover"
                      />
                      <div className="absolute  bottom-4  left-4 right-4 xl:left-10 xl:right-10">
                        <div className="bg-white rounded-xl px-6 py-5">
                          <h3 className='xl:text-2xl mb-2'>{slide.title}</h3>
                          <p>
                            {
                              slide.description.root.children[0].children[0]
                                .text
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-button-prev absolute rounded-full  bg-primary after:!text-base !w-10 !h-10 after:text-white  after:font-bold"></div>
            <div className="swiper-button-next absolute rounded-full  bg-primary after:!text-base !w-10 !h-10 after:text-white  after:font-bold"></div>
          </Swiper>
        </div>
     </motion.div>
    </section>
  );
}

export default Benefits 