'use client'
import React from 'react'
import { motion } from 'framer-motion';
const Time_line = ({ title, description, YearArray }) => {
  return (
    <>
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
        </motion.div>
        <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container timeline">
          {/* Render rows dynamically (4 items per row) */}
          {Array.from({ length: Math.ceil(YearArray.length / 4) }).map(
            (_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {YearArray
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((item, i) => {
                    const year = item.Year;
                    const text =
                      item.description?.root?.children?.[0]?.children?.[0]
                        ?.text ?? "";

                    return (
                      <div className="box relative w-full" key={i}>
                        <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
                          <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                            {year}
                          </span>
                          <p className="text-base font-light text-accent1">
                            {text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )
          )}
        </motion.div>
        {/* <div className="container timeline">
        <div className="row">
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="box relative w-full">
            <div className="border border-black/10 rounded-[20px] p-4 md:p-6 shadow-[0_4.8px_24.4px_0_rgba(19,16,34,.1)] sm:max-w-[267px] mx-auto">
              <span className="text-50 leading-[.7] mb-2 lg:mb-5 inline-block font-Josefin text-accent">
                2022
              </span>
              <p className="text-base font-light text-accent1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
};

export default Time_line