import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import Reviews from "../ReviewData/page";
import FAQ from "../components/FAQ"
import LongTermEffects from '../components/LongTermEffects'
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let Entspannung_StressabbauData;
  let schemaJSON = null;
  try {
    Entspannung_StressabbauData = await Alldata("/entspannung_StressabbauPage");
    schemaJSON = JSON.stringify(Entspannung_StressabbauData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!Entspannung_StressabbauData) {
    return <div>No data available.</div>;
  }


  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={Entspannung_StressabbauData.hero.text}
        Banner={Entspannung_StressabbauData.hero.heroImage.url}
        BannerListdata={
          Entspannung_StressabbauData.hero.richText.root.children[0].children
        }
        BTN={Entspannung_StressabbauData.hero.link}
        container={Entspannung_StressabbauData.hero.container_Hight}
        Image_Position={Entspannung_StressabbauData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
      <Clients
        title={Entspannung_StressabbauData.partnerlogo.title}
        ImageArray={Entspannung_StressabbauData.partnerlogo.nestedSections}
      />
      <div className='h-[clamp(6rem,4.8rem+6vw,12rem)]'></div>
      <LongTermEffects
        ImageUrl={Entspannung_StressabbauData.abouts.aboutsImage.url}
        title={Entspannung_StressabbauData.abouts.headding}
        description={
          Entspannung_StressabbauData.abouts.main_description.root.children[0]
            .children[0].text
        }
        ImageArray={Entspannung_StressabbauData.abouts.nestedSections}
      />
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reference
        Main_title={Entspannung_StressabbauData.Meine_Referenzen.title}
        Main_description={
          Entspannung_StressabbauData.Meine_Referenzen.description.root
            .children[0].children[0].text
        }
        Image_Data={
          Entspannung_StressabbauData.Meine_Referenzen.nestedMeine_Referenzen
        }
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Question
        title={Entspannung_StressabbauData.cta.title}
        description={
          Entspannung_StressabbauData.cta.description.root.children[0]
            .children[0].text
        }
        cta_image={Entspannung_StressabbauData.cta.cta_image}
        BTN={Entspannung_StressabbauData.cta.link}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Protrance
        title={Entspannung_StressabbauData.service.title}
        ImageArray={Entspannung_StressabbauData.service.nestedService}
      />
      <div className='h-[162px]'></div>
      <Reviews params={Entspannung_StressabbauData.Reviews.enableReviews} />
      <div className='h-[224px]'></div>
      <FAQ
        title={Entspannung_StressabbauData.faq.title}
        ArrayData={Entspannung_StressabbauData.faq.nestedfaq}
        SectionShow={Entspannung_StressabbauData.faq.enableFAQ}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page

export async function generateMetadata() {
  const metadata = await Alldata("/entspannung_StressabbauPage");

  const title = metadata?.seo?.meta?.title || "Default Title";
  const description = metadata?.seo?.meta?.description || "Default Description";
  const canonical =
    metadata?.seo?.meta?.canonicalUrl ||
    "";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}