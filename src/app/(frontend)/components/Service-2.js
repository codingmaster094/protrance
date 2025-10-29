'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link  from 'next/link';
import Image from 'next/image';

const Service = () => {
	 const ServicesliderData = [
    { id: 1, image: '/images/slide-img-1.webp', title: 'Image 1' , heading:'Abnehmen',description:'Zielt auf die Ursachen von Stress oder emotionsgesteuertem Essen ab.'},
    { id: 2, image: '/images/slide-img-2.webp', title: 'Image 2', heading:'Raucherentwöhnung',description:'Zielt auf die Ursachen von Stress oder ' },
    { id: 3, image: '/images/slide-img-3.webp', title: 'Image 3',heading:'Selbstfürsorge',description:'Zielt auf die Ursachen von Stress oder ' },
	 { id: 4, image: '/images/slide-img-4.webp', title: 'Image 4',heading:'Entspannung & Stressabbau',description:'Zielt auf die Ursachen von Stress oder ' },
    { id: 5, image: '/images/slide-img-2.webp', title: 'Image 2', heading:'Selbstfürsorge',description:'Zielt auf die Ursachen von Stress oder ',  },
	 { id: 6, image: '/images/slide-img-3.webp', title: 'Image 1',heading:'Selbstfürsorge',description:'Zielt auf die Ursachen von Stress oder ' },
  ];
  return (
     <section className='relative overflow-hidden'>
		 <div className='container'>
			<div className='flex flex-col gap-6 lg:gap-16 w-full max-w-[1248px] mx-auto'>
				  <div className='flex shrink-0  flex-col gap-4'>
				     <h2>Leistungen im Überblick</h2>
				     <p>Als zertifizierte Hypnose Master und ganzheitliche Beraterin biete ich dir am Bodensee eine einzigartige Kombination aus Hypnose, psychologischer Beratung und Ernährungsberatung. Mein Ansatz: Die Harmonie von Körper, Geist und Seele als Schlüssel zu deiner Gesundheit.</p>
					  <h3>Hypnose: Der Schlüssel zu deinem Unterbewusstsein</h3>
					  <p>Wusstest du, dass dein Unterbewusstsein 90-95% deines Verhaltens steuert? Durch professionelle Hypnose kannst du:</p>
				      <ul className='list-disc list-inside marker:text-primary'>
							<li>Verborgene Ressourcen aktivieren</li>
							<li>Negative Glaubenssätze auflösen</li>
							<li>Positive Veränderungen bewirken</li>
				      </ul>
				      <Link href="#" aria-label="btn-link"
						role="link" className="btn btn-primary-alt hidden lg:inline-flex mt-0  self-start">
                          MEHR LESEN
                      </Link>
				  </div>
				   <div className='flex w-full'>
							<Swiper className="service-slider service-slider-2 h-[500px] lg:h-[624px] "
								  modules={[Autoplay]}
								  loop={true}
								  pagination={{ clickable: true }}
								  spaceBetween={24}
								  slidesPerView={3}
								  autoplay={{
									delay: 3000, 
									disableOnInteraction: false, 
								  }}
								 breakpoints={{
									 0:    {slidesPerView: 1 },
									 576: { slidesPerView: 2 },
									 600:{slidesPerView:2},
									 1000:{slidesPerView:3},
									 1600: { slidesPerView: 4 },
								 }}>
								{ServicesliderData.map((slide) => (
									<SwiperSlide key={slide.id} className='h-full  rounded-[20px] overflow-hidden group'>
										<div className="flex items-center justify-center rounded-[20px] overflow-hidden  relative  h-full">
											<div className='absolute top-0 left-0 w-full h-full'>
												<Image
													src={slide.image}
													alt={slide.title}
													width={500}
													height={500}
													className='w-full object-cover !h-full'/>
											</div>
											<div className='flex  *:text-white w-full h-full items-end after:top-0 after:bottom-0 after:absolute after:w-full after:h-full after:bg-[linear-gradient(180deg,rgba(26,96,154,0)_56.21%,rgba(26,96,154,0.34644)_70.32%,rgba(26,96,154,0.64)_79.4%,#1A609A_93.94%)] transition-all duration-300'>
													<div className='block relative z-10 *:text-white h-[125px] transition-all ease duration-500 p-6  w-full group-hover:h-[25%]'>
                                                        <h3 className='inline-block'>
														  {slide.heading}
													</h3>
														<p>{slide.description}</p>
													</div>
											</div>
										</div>
									</SwiperSlide>
								))}
		            	   </Swiper>
				  </div>
			</div>
		 </div>
	 </section>
  )
}

export default Service