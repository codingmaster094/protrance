'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
const LampenfieberPrüfungsangst = (
  {
    headding,
    ImageUrl,
    title,
    description1,
    description2,
    subdescription
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
        <div className="flex flex-col text-left gap-4 mx-auto">
          <h2 dangerouslySetInnerHTML={{ __html: headding }}></h2>
        </div>
        <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
        <div className="flex gap-8 2xl:gap-20 flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-[65%] lg:w-[40%] rounded-[32px] overflow-hidden h-[400px] xl:h-[610px]">
            <Image
              src={ImageUrl}
              alt="aboutimage"
              className="object-cover w-full h-full"
              width={800}
              height={600}
            ></Image>
          </div>
          <div className="flex flex-col w-full lg:w-1/2  gap-4 lg:gap-8 rounded-[24px] h-full">
            <div className="flex flex-col gap-4">
              <h3
                className="text-lg lg:text-2xl"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h3>
              <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
              <ul className="list-disc marker:text-primary ms-5 text-accent1 text-opacity-80 p">
                {subdescription.map((li, i) => {
                  return <li key={i}>{li.children[0].text}</li>;
                })}
              </ul>

              {description2.map((p, i) => {
                return <p key={i}>{p.children[0].text}</p>;
              })}

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default LampenfieberPrüfungsangst