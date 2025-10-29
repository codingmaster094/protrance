'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
const Raucherentwöhnung = ({
  titleCenter,
  ImageUrl,
  Heading,
  description,
  title,
  main_description,
  Sub_description,
  subtitle,
  Inner_description
}) => {
  return (
    <section>
<motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className={`flex flex-col text-center gap-4 mx-auto ${titleCenter ? '' : 'text-start'}`}>
          <h2 dangerouslySetInnerHTML={{ __html: Heading }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className='h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]'></div>
        <div className="flex gap-8 2xl:gap-20 flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-[65%] lg:w-[45%] rounded-[32px] overflow-hidden h-[400px] xl:h-[583px]">
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
              <div dangerouslySetInnerHTML={{ __html: main_description }}></div>
              <ul className="list-disc marker:text-primary ms-5 text-accent1 text-opacity-80 p">
                {Sub_description.map((li, i) => {
                  return <li key={i}>{li.children[0].text}</li>
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 dangerouslySetInnerHTML={{ __html: subtitle }}></h3>
              <ul className="list-disc marker:text-primary ms-5 text-accent1 text-opacity-80 p">
                {Inner_description.map((li, i) => {
                  return <li key={i}>{li.children[0].text}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Raucherentwöhnung