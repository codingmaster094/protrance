import React from 'react'

const Timeline = (
  {
    title,
description,
YearArray
  }
) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-6 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
        <div className="timeline relative w-full h-full lg:h-[500px] flex flex-col lg:flex-row justify-between mx-[15px] sm:mx-0 gap-4 before:content-[''] before:absolute before:top-0 lg:before:top-1/2 before:left-0 before:w-[2px] lg:before:w-full before:h-full lg:before:h-[2px] before:bg-[#dedede] before:z-10">
          {YearArray.map((item, index) => {
            const isEven = index % 2 === 0;

            const descriptionText =
              item?.description?.root?.children?.[0]?.children?.[0]?.text || "";

            return (
              <div
                key={index}
                className={`timeline-item relative h-full ${
                  isEven
                    ? "flex justify-end items-end"
                    : "ml-0 lg:-ml-[100px] mr-0 lg:-mr-[100px] flex justify-end lg:justify-start items-start"
                }`}
              >
                <div
                  className={`w-full lg:w-[2px] h-[2px] lg:h-1/2 bg-[#dedede] absolute ${
                    isEven ? "top-1/2 lg:top-auto" : "top-1/2 lg:top-auto"
                  } left-0 lg:left-1/2`}
                >
                  <div
                    className={`circle w-10 h-10 bg-white border border-[#dedede] rounded-full absolute ${
                      isEven ? "top-[-20px]" : "bottom-[-20px]"
                    } -left-[20px] z-10`}
                  >
                    <span className="w-6 h-6 bg-[#66D2EE] rounded-full inline-block z-10 top-1/2 left-1/2 translate-x-1/4 translate-y-1/4"></span>
                  </div>
                </div>

                <div
                  className={`timeline-content bg-white p-6 rounded-[20px] relative shadow-[0px_4.8px_24.4px_-6px_#1310221A] ${
                    isEven
                      ? "ms-12 sm:ms-0"
                      : "ms-12 sm:ms-0 mx-0 sm:mx-auto lg:mx-0"
                  }`}
                >
                  <h3 className="text-50">{item.Year}</h3>
                  <p>{descriptionText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline