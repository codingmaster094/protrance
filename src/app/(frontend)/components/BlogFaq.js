"use client";
import React from "react";
import { motion } from 'framer-motion';
const BlogFaq = ({ SectionShow, title, ArrayData }) => {
  return (
    SectionShow && (
         <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container max-w-[1440px] mx-auto mt-4" id="faq">
        <div className=" w-full max-w-[1400px]">
          <div className="flex justify-left text-left">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          </div>
          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-4 ">
              {ArrayData.map((item, index) => (
                <div
                  key={index}
                  className="accordian flex flex-col bg-background p-6 gap-4 transition-all duration-700 ease-in rounded-xl"
                >
                  <div className="accordian-header">
                    <h3
                      className="text-lg font-ubuntu"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h3>
                  </div>
                  <div className="accordian-content text-left transition-all duration-300 ease-in-out block">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.root.children[0].children[0].text,
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    )
  );
};

export default BlogFaq;
