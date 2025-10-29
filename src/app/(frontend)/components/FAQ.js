"use client";
import React from "react";
import { motion } from "framer-motion";

const FAQ = ({ SectionShow, title, ArrayData }) => {
  return (
    SectionShow && (
      <section id="faq">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container max-w-[1052px]"
        >
          <div className="flex justify-center text-center">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          </div>
          <div className="h-8 lg:h-[64px]"></div>
          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-4">
              {ArrayData.map((item, index) => (
                <div
                  key={index}
                  className="accordian flex flex-col bg-background p-6 gap-4 rounded-xl"
                >
                  <div className="accordian-header flex justify-between gap-2">
                    <h3
                      className="text-lg font-ubuntu"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h3>
                  </div>
                  <div className="accordian-content text-left block">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description?.root?.children?.[0]?.children?.[0]
                            ?.text || "",
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    )
  );
};

export default FAQ;
