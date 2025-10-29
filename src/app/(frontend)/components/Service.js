'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import motion

const Service = ({
  title,
  description,
  subTitle,
  subDescription,
  points,
  BTN,
  ImageArry,
}) => {
  let processedSlides = [...ImageArry];
  while (processedSlides.length < 4 && ImageArry.length > 0) {
    processedSlides = [...processedSlides, ...ImageArry];
  }

  return (
    <section>
      <div className="pl-4 2xl:pl-[calc((100%-1600px)/2)] pr-4 lg:pr-0">
        <div className="flex flex-col lg:flex-row gap-10 2xl:gap-16">

          {/* ✅ Animate Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:w-6/12 lxl:w-5/12"
          >
            <h2 className="mb-4" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p className="mb-6" dangerouslySetInnerHTML={{ __html: description }}></p>
            <h3 className="mb-4" dangerouslySetInnerHTML={{ __html: subTitle }}></h3>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: subDescription }}></p>
            <ul className="list-disc list-inside marker:text-primary mb-8">
              {points.map((li, i) => (
                <li key={i}>{li.children[0].text}</li>
              ))}
            </ul>
            {BTN && (
              <Link
                href={BTN.url}
                aria-label="btn-link"
                role="link"
                className="btn btn-primary-alt hidden lg:inline-flex mt-0 self-start"
              >
                {BTN.label}
              </Link>
            )}
          </motion.div>

          {/* ✅ Animate Swiper Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:w-6/12 lxl:w-8/12"
          >
            <Swiper
              className="service-slider"
              modules={[Autoplay]}
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                715: { slidesPerView: 2 },
                1200: { slidesPerView: 1.7 },
                1400: { slidesPerView: 2.75 },
              }}
            >
              {processedSlides?.map((slide, i) => (
                <SwiperSlide
                  key={i}
                >
                  {/* <div className="flex items-center justify-center rounded-[20px] overflow-hidden relative h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <Image
                        src={slide.aboutsImage.url}
                        alt={slide.title}
                        width={500}
                        height={500}
                        className="w-full object-cover !h-full object-right"
                      />
                    </div>
                    <div className="*:text-white w-full h-full transition-all duration-500 service_card flex flex-col justify-end p-6">
                      <h3 className="inline-block" dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: slide.description.root.children[0].children[0].text,
                        }}
                      ></div>
                    </div>
                  </div> */}
                  <div className="card bg-black/5 rounded-2xl overflow-hidden group relative z-10">
                        <div className="overlay bg-white/0 absolute inset-0 z-10 group-hover:bg-white/70 transition-all"></div>
                        <div className="image_wrapper h-[clamp(23.125rem,21.625rem+7.5vw,30.625rem)]" >
                            <div className="image absolute inset-0 h-[clamp(23.125rem,21.625rem+7.5vw,30.625rem)] group-hover:!h-full transition-all duration-300 group-hover:scale-110 ease-out">
                                <Image src={slide.aboutsImage.url}
                                    alt="slider-image" className="size-full object-cover" width={400} height={450} />
                            </div>
                        </div>
                        <div className="content p-5 relative z-10 pb-10 ">
                            <h3 className="inline-block" dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                            <div dangerouslySetInnerHTML={{
                          __html: slide.description.root.children[0].children[0].text,
                        }}></div>
                        </div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Service;
