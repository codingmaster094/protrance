'use client'
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
const HowTofindMe = ({ ImageUrl, title, description, ImageArrya }) => {

  return (
    <section>
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className="flex gap-8 md:gap-10 xl:gap-20 flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full  lg:w-1/2 gap-4 md:gap-6">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div>
              {description.root.children.map((val, index) => {
                return <p key={index}>{val.children[0].text}</p>;
              })}
            </div>
          </div>
          <div
            className="flex rounded-[32px] w-full sm:w-2/3 lg:w-[42%] overflow-hidden h-[350px] md:h-[446px] relative 
				     after:absolute after:top-0 after:left-0 
				     after:bg-[linear-gradient(180deg,rgba(26,96,154,0)_46.38%,rgba(26,96,154,0.34644)_64.83%,rgba(26,96,154,0.72)_78.42%,#1A609A_100%)]
				     after:w-full after:h-full"
          >
            <Image
              src={ImageUrl}
              alt="image-1"
              width={1000}
              height={800}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="grid  grid-cols-auto sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-10 lg:mt-20 gap-6  md:gap-8  lg:gap-10  2xl:gap-16 w-full max-w-[1250px] mx-auto">
          {ImageArrya.map((item, index) => {
            return (
               <div
                key={index}
                className="flex flex-col  bg-white p-6 gap-6 rounded-[20px] shadow-[0px_4.8px_24.4px_-6px_#1310221A] border border-black border-opacity-[0.11]
]"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 20% visibility triggers animation
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
              >
                <div className="flex rounded-3xl overflow-hidden h-[164px]">
                  <Image
                    src={item.nestedaboutsImage.url}
                    alt="card18"
                    width={1000}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {item.description.root.children.map((val, index) => {
                    return <p key={index}>{val.children[0].text}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HowTofindMe;
