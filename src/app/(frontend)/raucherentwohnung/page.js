import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import Reviews from "../ReviewData/page";
import FAQ from "../components/FAQ"
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import Calculater from '../components/Calculater'
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let raucherentwohnungData;
  let schemaJSON = null;
  try {
    raucherentwohnungData = await Alldata("/raucherentwohnung");
    schemaJSON = JSON.stringify(raucherentwohnungData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!raucherentwohnungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={raucherentwohnungData.hero.text}
        Banner={raucherentwohnungData.hero.heroImage.url}
        BannerListdata={
          raucherentwohnungData.hero.richText.root.children[0].children
        }
        BTN={raucherentwohnungData.hero.link}
        container={raucherentwohnungData.hero.container_Hight}
        Image_Position={raucherentwohnungData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]'></div>
      <Clients
        title={raucherentwohnungData.partnerlogo.title}
        ImageArray={raucherentwohnungData.partnerlogo.nestedSections}
      />
      <div className='h-[190px]'></div>
      <Raucherentwöhnung
        ImageUrl={raucherentwohnungData.abouts.aboutsImage.url}
        Heading={raucherentwohnungData.abouts.heading}
        description={
          raucherentwohnungData.abouts.description.root.children[0].children[0]
            .text
        }
        title={raucherentwohnungData.abouts.heading}
        main_description={
          raucherentwohnungData.abouts.mainDescription.root.children[0]
            .children[0].text
        }
        Sub_description={
          raucherentwohnungData.abouts.subDescription.root.children[0].children
        }
        subtitle={raucherentwohnungData.abouts.subtitle}
        Inner_description={
          raucherentwohnungData.abouts.innerDescription.root.children[0]
            .children
        }
      />
      <div className='h-[clamp(6.6875rem,5.35rem+6.6875vw,13.375rem)]'></div>
      <Calculater/>
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reference
        Main_title={raucherentwohnungData.Meine_Referenzen.title}
        Main_description={
          raucherentwohnungData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={
          raucherentwohnungData.Meine_Referenzen.nestedMeine_Referenzen
        }
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Question
        title={raucherentwohnungData.cta.title}
        description={
          raucherentwohnungData.cta.description.root.children[0].children[0]
            .text
        }
        cta_image={raucherentwohnungData.cta.cta_image}
        BTN={raucherentwohnungData.cta.link}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Protrance
        title={raucherentwohnungData.service.title}
        ImageArray={raucherentwohnungData.service.nestedService}
      />
      <div className='h-[162px]'></div>
      <Reviews params={raucherentwohnungData.Reviews.enableReviews} />
      <div className='h-[224px]'></div>
      <FAQ
        title={raucherentwohnungData.faq.title}
        ArrayData={raucherentwohnungData.faq.nestedfaq}
        SectionShow={raucherentwohnungData.faq.enableFAQ}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page

export async function generateMetadata() {
  const metadata = await Alldata("/raucherentwohnung");

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