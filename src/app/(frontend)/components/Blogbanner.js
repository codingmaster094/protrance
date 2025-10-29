import React from 'react'
import Image from 'next/image'
const Blogbanner = ({ Image_Position ,container, Heading, Banner, BannerListdata }) => {
  return (
    <section>
      <div className=" relative bg-accent overflow-hidden">
        <div
          className={
            container === "full"
              ? "overflow-hidden w-[calc(100%-32px)] rounded-2xl max-w-[1440px] mx-auto mt-4 pb-10 pt-[180px] sm:pt-[200px] md:pb-[100px] xl:py-[200px] 2xl:py-[342px] relative "
              : "overflow-hidden w-[calc(100%-32px)] rounded-2xl  max-w-[1440px] mx-auto mt-4 pt-[180px] pb-10 sm:pt-[200px] lg:pb-[180px]  2xl:pt-[246px]"
          }
        >
          <div className="flex flex-col lg:flex-row gap-8   lg:gap-16 items-center ">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 *:text-white lg:pe-8">
              <h1 dangerouslySetInnerHTML={{ __html: Heading || "" }}></h1>
              <ul className="list-disc text-left ms-5 p text-white">
                {BannerListdata.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item.children[0].text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:absolute top-0  right-0 w-full lg:w-1/2 h-full">
              <Image
                src={Banner}
                alt="banner"
                width={800}
                height={400}
                className={`object-cover ${
                  Image_Position === "top"
                    ? "object-top"
                    : Image_Position === "middle"
                    ? "object-center"
                    : Image_Position === "bottom"
                    ? "object-bottom"
                    : ""
                } w-full h-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogbanner