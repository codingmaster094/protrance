
'use client'
import Image from "next/image"
import { motion } from 'framer-motion';
const hypnosisweightloss = ({ ImageUrl, title, description, ImageArry }) => {
  return (
    <section>
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container">
        <div className="flex gap-8 2xl:gap-20 flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-[65%] lg:w-[40%] rounded-[32px] overflow-hidden h-[400px] xl:h-[610px]">
            <Image
              src={ImageUrl}
              alt="aboutimage"
              width={678}
              height={610}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8 flex-1">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p
              className="flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="flex gap-6 flex-col sm:flex-row">
              {ImageArry.map((item, index) => (
                 <div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 20% visibility triggers animation
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
              >
                  <div className="flex flex-col bg-background p-6 gap-4 rounded-[24px] h-full">
                    <div className="flex item-center justify-center w-[72px] h-[72px] bg-white rounded-full">
                      <Image
                        src={item.nestedaboutsImage.url}
                        alt={item.nestedaboutsImage.filename}
                        width={36}
                        height={36}
                      ></Image>
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                      <h3 className="text-lg lg:text-2xl">{item.title}</h3>
                      <p>
                        {item.description.root.children[0].children[0].text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default hypnosisweightloss