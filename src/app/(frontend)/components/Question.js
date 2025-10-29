'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // ✅ Import motion

const Question = ({ cta_image, title, description, BTN }) => {
  return (
    <section>
      <div className="container">
        <motion.div
          className="relative flex flex-col p-8 md:p-16 z-10 bg-primary *:text-white rounded-2xl items-center text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute left-0 w-full h-full -z-10 top-0">
            {(cta_image !== undefined && cta_image !== null) && (
              <Image
                src={cta_image.url}
                width={1600}
                height={292}
                alt="vector"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h2 className="mb-4">{title}</h2>
          <p>{description}</p>
          <div className="flex mt-4">
            {BTN && (
              <Link
                href={BTN.url}
                aria-label="btn-link"
                role="link"
                className="btn bg-[#9A1A60] text-white"
              >
                {BTN.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Question;
