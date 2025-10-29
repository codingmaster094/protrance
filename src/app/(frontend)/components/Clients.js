'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion'; // ✅ Import motion

const Clients = ({ title, ImageArray }) => {
  let processedSlides = [...ImageArray];
  while (processedSlides.length < 6 && ImageArray.length > 0) {
    processedSlides = [...processedSlides, ...ImageArray];
  }

  return (
    <section>
      <motion.div className="container" initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}>
        <div
          className="flex mb-6 sm:mb-8 justify-center"
        >
          <h2 className="text-center" dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Swiper
            className="w-full client-slider"
            modules={[Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={24}
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
              1200: { slidesPerView: 5 },
            }}
          >
            {processedSlides.map((slide, i) => (
              <SwiperSlide key={i} className="py-4">
                <div className="flex items-center justify-center p-5 shadow-[0px_0px_10px_0px_#EDEDED] rounded-2xl">
                  {slide.link?.url ? (
                    <Link href={slide.link.url} target={slide.link.target || '_self'}>
                      <Image
                        src={slide.partnerImage.url}
                        alt={slide.partnerImage.filename}
                        width={0}
                        height={0}
                        className="w-full h-auto"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={slide.partnerImage.url}
                      alt={slide.partnerImage.filename}
                      width={0}
                      height={0}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Clients;
