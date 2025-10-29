'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
const map = (
  {
    title,
    description,
    ImageUrl
  }
) => {
  return (
    <section>
     <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className="flex flex-col gap-4 md:gap-6 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className='h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]'></div>
        <div className="flex h-[420px] rounded-[32px] overflow-hidden">
          <Image
            src={ImageUrl}
            alt="image-map"
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default map