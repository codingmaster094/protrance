"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterItem = ({ item }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(item.subtitle.replace(/\D/g, "")) || 0; 
      const duration = 2000; // ms
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [inView, item.subtitle]);

  return (
    <motion.div
      ref={ref}
     initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col border border-black border-opacity-10 p-6 gap-4 counter-block rounded-[20px]"
    >
      <div className="flex items-center gap-2">
        <Image
          src={item.protance_zahlenImage.url}
          alt={item.IconTitle || "counter Image"}
          width={40}
          height={40}
        />
        <span className="font-light inline-block text-accent1">
          {item.title}
        </span>
      </div>
      <span className="text-[50px] font-semibold font-Josefin block leading-tight text-accent">
        {count}
        {item.subtitle.replace(/[0-9]/g, "")} {/* keeps suffix like + or k */}
      </span>
      <p
        className="text-accent1"
        dangerouslySetInnerHTML={{
          __html: item.description.root.children[0].children[0].text,
        }}
      ></p>
    </motion.div>
  );
};

const Counter = ({ title, ImageArray }) => {
  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 md:gap-8 p-6 md:p-10 2xl:p-16 bg-background rounded-lg md:rounded-[32px]"
        >
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {ImageArray.map((item, index) => (
              <CounterItem key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Counter;
