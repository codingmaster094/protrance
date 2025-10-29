import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import Reviews from "../ReviewData/page";
import FAQ from "../components/FAQ"
import Hypnosisweightloss from '../components/hypnosisweightloss'
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const Page = async () => {
  let AbnehmenPageData;
  let schemaJSON = null;

  try {
    AbnehmenPageData = await Alldata("/abnehmen");
    schemaJSON = JSON.stringify(AbnehmenPageData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!AbnehmenPageData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={AbnehmenPageData.hero.text}
        Banner={AbnehmenPageData.hero.heroImage.url}
        BannerListdata={
          AbnehmenPageData.hero.richText.root.children[0].children
        }
        BTN={AbnehmenPageData.hero.link}
        container={AbnehmenPageData.hero.container_Hight}
        Image_Position={AbnehmenPageData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,2rem+2.5vw,5rem)]'></div>
      <Clients
        title={AbnehmenPageData.partnerlogo.title}
        ImageArray={AbnehmenPageData.partnerlogo.nestedSections}
      />
      <div className='h-[clamp(6rem,4.8rem+6vw,12rem)]'></div>
      <Hypnosisweightloss
        ImageUrl={AbnehmenPageData.abouts.aboutsImage.url}
        title={AbnehmenPageData.abouts.title}
        description={
          AbnehmenPageData.abouts.description.root.children[0].children[0].text
        }
        ImageArry={AbnehmenPageData.abouts.nestedSections}
      />
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reference
        Main_title={AbnehmenPageData.Meine_Referenzen.title}
        Main_description={
          AbnehmenPageData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={AbnehmenPageData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Question
        title={AbnehmenPageData.cta.title}
        description={
          AbnehmenPageData.cta.description.root.children[0].children[0].text
        }
        BTN={AbnehmenPageData.cta.link}
        cta_image={AbnehmenPageData.cta.cta_image}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Protrance
        title={AbnehmenPageData.service.title}
        ImageArray={AbnehmenPageData.service.nestedService}
      />
      <div className='h-[162px]'></div>
      <Reviews params={AbnehmenPageData.Reviews.enableReviews} />
      <div className='h-[224px]'></div>
      <FAQ
        title={AbnehmenPageData.faq.title}
        ArrayData={AbnehmenPageData.faq.nestedfaq}
        SectionShow={AbnehmenPageData.faq.enableFAQ}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default Page

export async function generateMetadata() {
  const metadata = await Alldata("/abnehmen");

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