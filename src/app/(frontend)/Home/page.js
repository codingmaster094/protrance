import React from 'react'
import Banner from '../components/Banner'
import Clients from '../components/Clients'
import Counter from '../components/Counter'
import Service from '../components/Service'
import Question from '../components/Question'
import Benefits from '../components/Benefits'
import Reviews from '../ReviewData/page'
import Reference from '../components/Reference'
import Protrance from '../components/Protrance'
import FAQ from '../components/FAQ'
import AllData from "../untils/AllDataFatch"

const page = async () => {
  let HomePageData;
  try {
    HomePageData = await AllData("/home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <Banner
        Heading={HomePageData.hero.text}
        Banner={HomePageData.hero.heroImage?.url}
        Bannervideo={HomePageData.hero.video?.url}
        BannerListdata={HomePageData.hero.richText.root.children[0].children}
        BTN={HomePageData.hero.link}
        container={HomePageData.hero.container_Hight}
        Image_Position={HomePageData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
      <Clients
        title={HomePageData.partnerlogo.title}
        ImageArray={HomePageData.partnerlogo.nestedSections}
      />
      <div className='h-[clamp(4.375rem,3.5rem+4.375vw,8.75rem)]'></div>
      <Service
        title={HomePageData.abouts.title}
        description={
          HomePageData.abouts.description.root.children[0].children[0].text
        }
        subTitle={HomePageData.abouts.subTitle}
        subDescription={
          HomePageData.abouts.subDescription.root.children[0].children[0].text
        }
        points={HomePageData.abouts.ulLi.root.children[0].children}
        BTN={HomePageData.abouts.link}
        ImageArry={HomePageData.abouts.nestedSections}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Counter
        title={HomePageData.protance_zahlen.title}
        ImageArray={HomePageData.protance_zahlen.nestedSections}
      />
      <div className='h-[clamp(3.125rem,2.5rem+3.125vw,6.25rem)]'></div>
      <Question
        title={HomePageData.cta.title}
        description={
          HomePageData.cta.description.root.children[0].children[0].text
        }
        BTN={HomePageData.cta.link}
        cta_image={HomePageData.cta.cta_image}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Benefits
        title={HomePageData.service.title}
        description={
          HomePageData.service.description.root.children[0].children[0].text
        }
        ImageArray={HomePageData.service.nestedService}
      />
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reviews params={HomePageData.Reviews.enableReviews} />
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reference
        Main_title={HomePageData.Meine_Referenzen.title}
        Main_description={
          HomePageData.Meine_Referenzen.description.root.children[0].children[0]
            .text
        }
        Image_Data={HomePageData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Question
        title={HomePageData.cta2.title}
        description={
          HomePageData.cta2.description.root.children[0].children[0].text
        }
        BTN={HomePageData.cta2.link}
        cta_image={HomePageData.cta2.cta_image}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Protrance
        title={HomePageData.service2.title}
        ImageArray={HomePageData.service2.nestedService}
      />
      <div className='h-[clamp(6.6875rem,5.35rem+6.6875vw,13.375rem)]'></div>
      <FAQ
        title={HomePageData.faq.title}
        SectionShow={HomePageData.faq.enableFAQ}
        ArrayData={HomePageData.faq.nestedfaq}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page