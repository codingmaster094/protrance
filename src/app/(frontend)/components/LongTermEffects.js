'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
const LongTermEffects = (
	{
		ImageUrl,
title,
description,
ImageArray
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
        <div className="flex flex-col gap-6 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
        <div className="flex gap-8 2xl:gap-20 flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-[65%] lg:w-[40%] rounded-[32px] overflow-hidden h-[400px] xl:h-[610px]">
            <Image
              src={ImageUrl}
              width={678}
              height={532}
              alt="aboutimage"
              className="object-cover w-full h-full"
            ></Image>
          </div>
          {ImageArray.map((item , index) => {
			return (
         <div
                key={index}
                className="flex flex-col w-full lg:w-1/2 p-6 lg:p-16 gap-4 lg:gap-8 rounded-[24px] h-full bg-background"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 20% visibility triggers animation
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
              >
          <div className="flex flex-col gap-4">
            <h3
              className="text-lg lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h3>
            <ul className="list-disc marker:text-primary list-inside">
              {item.description.root.children[0].children.map((val, i) => {
                return <li key={i}>{val.children[0].text}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4
              className="h3"
              dangerouslySetInnerHTML={{ __html: item.subTitle }}
            ></h4>
            <div
              dangerouslySetInnerHTML={{
                __html: item.subdescription.root.children[0].children[0].text,
              }}
            ></div>
          </div>
          <div className="svg-Image ">
            <Image
              src={item.aboutsImage.url}
              alt="stamp.svg"
              width={350}
              height={200}
            />
          </div>
        </div>
      );
		  })}
          
        </div>
      </motion.div>
    </section>
  );
}

export default LongTermEffects