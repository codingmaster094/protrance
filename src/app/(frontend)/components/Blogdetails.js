"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import BlogFaq from "./BlogFaq";
import { motion } from 'framer-motion';
const Blogdetails = ({
  bloAboutTitle,
  blogContent,
  cta_image,
  cta_title,
  cta_description,
  cta_BTN,
  blogcreatedAt,
  blogupdatedAt,
  gutenbergData,
  FAQ,
}) => {
  const [headers, setHeaders] = useState([]);
  const [updatedHTML, setUpdatedHTML] = useState("");

  // Initialize Lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  // Process content and assign IDs
  useEffect(() => {
    if (!gutenbergData) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(gutenbergData, "text/html");
    const headingElements = Array.from(doc.querySelectorAll("h1, h2, h3"));

    const headerList = headingElements.map((heading) => {
      const text = heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
      heading.setAttribute("id", id);
      return { id, text };
    });

    setHeaders(headerList);
    setUpdatedHTML(doc.body.innerHTML); // updated HTML string with IDs
  }, [gutenbergData]);

  // Smooth scroll using Lenis
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link || !window.lenis) return;

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.lenis.scrollTo(targetElement, {
          offset: -150,
          duration: 0.5,
          easing: (t) => t * (2 - t),
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <section>
           <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container max-w-[1440px] mx-auto">
          <div className="flex justify-between md:flex-row flex-col gap-6">
            <p>
              <span>{dayjs(blogcreatedAt).format("DD.MM.YYYY")}</span> |
              <span>
                {" "}
                ZULETZT AKTUALISIERT{" "}
                <span>{dayjs(blogupdatedAt).format("DD.MM.YYYY")}</span>
              </span>
            </p>
            <form>
              <div className="flex border border-1 border-[#545454] border-opacity-20 bg-white  rounded-3xl gap-4 p-2 w-full  justify-between">
                <input
                  type="search"
                  className="flex bg-transparent rounded-md appearance-none  placeholder:text-accent indent-2 w-full outline-none"
                  placeholder="Wonach suchen Sie?"
                />
                <button
                  type="submit"
                  className="px-8 py-2 bg-primary-alt rounded-full text-accent1"
                  value="Suche"
                  name="Suche"
                  aria-label="button"
                  role="button"
                >
                  Suche
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 pb-10">
            {bloAboutTitle && (
              <h2 dangerouslySetInnerHTML={{ __html: bloAboutTitle }}></h2>
            )}
            <ul className="list-disc text-left ms-5 p">
              {blogContent &&
                blogContent.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item.children[0].text}
                  </li>
                ))}
            </ul>
          </div>

          <div className="mt-4 mb-10 relative flex flex-col p-8 md:p-16 z-10  bg-primary *:text-white rounded-2xl items-center text-center">
            <div className="absolute left-0 w-full h-full  -z-10 top-0">
              {(cta_image != undefined || cta_image != null) && (
                <Image
                  src={cta_image.url}
                  width={1600}
                  height={292}
                  alt="vector"
                  className="w-full h-full object-cover"
                ></Image>
              )}
            </div>
            <h2
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: cta_title }}
            ></h2>
            <p dangerouslySetInnerHTML={{ __html: cta_description }}></p>
            <div className="flex">
              {cta_BTN && (
                <Link
                  href={cta_BTN.url}
                  aria-label="btn-link"
                  role="link"
                  className="btn bg-[#9A1A60] text-white"
                >
                  {cta_BTN.label}
                </Link>
              )}
            </div>
          </div>
          <ul className="mt-4 pb-10 menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal ">
            {headers.map(
              (header) =>
                header.id && (
                  <li key={header.id}>
                    <a href={`#${header.id}`} className="text-[#1a609a]">
                      {header.text}
                    </a>
                  </li>
                )
            )}
            {FAQ.enableFAQ && (
              <li>
                <a href={`#faq`} className="text-[#1a609a]">
                  {FAQ?.title}
                </a>
              </li>
            )}
          </ul>
          {updatedHTML && (
            <div className="flex justify-between flex-col-reverse lg:flex-row gap-8">
              <div
                className="flex w-full flex-col space-y-4 md:space-y-6 lg:space-y-8"
                dangerouslySetInnerHTML={{ __html: updatedHTML }}
              ></div>
            </div>
          )}
        </motion.div>
      </section>
      <BlogFaq
        title={FAQ.title}
        SectionShow={FAQ.enableFAQ}
        ArrayData={FAQ.nestedfaq}
      />
    </>
  );
};

export default Blogdetails;
