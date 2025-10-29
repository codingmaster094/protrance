
import React from "react"
import Banner from '../components/Banner'
import Reviews from "../ReviewData/page";
import Clients from '../components/Clients'
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import FAQ from "../components/FAQ"
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import Alldata from "../untils/AllDataFatch";
import SEO_schema from '../components/SEO_schema'
import generatePageMetadata from '../untils/generatePageMetadata'
const page = async () => {
  let SelbstfursorgeData;
  try {
    SelbstfursorgeData = await Alldata("/selbstfursorge");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!SelbstfursorgeData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SEO_schema slug="/selbstfursorge" faqs={SelbstfursorgeData.faq.nestedfaq} />
      <Banner
        Heading={SelbstfursorgeData.hero.text}
        Banner={SelbstfursorgeData.hero.heroImage.url}
        BannerListdata={
          SelbstfursorgeData.hero.richText.root.children[0].children
        }
        BTN={SelbstfursorgeData.hero.link}
        container={SelbstfursorgeData.hero.container_Hight}
        Image_Position={SelbstfursorgeData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]'></div>
      <Clients
        title={SelbstfursorgeData.partnerlogo.title}
        ImageArray={SelbstfursorgeData.partnerlogo.nestedSections}
      />
      <div className='h-[clamp(6rem,4.8rem+6vw,12rem)]'></div>
      <Raucherentwöhnung
        ImageUrl={SelbstfursorgeData.abouts.aboutsImage.url}
        Heading={SelbstfursorgeData.abouts.heading}
        description={
          SelbstfursorgeData.abouts.description.root.children[0].children[0]
            .text
        }
        title={SelbstfursorgeData.abouts.heading}
        main_description={
          SelbstfursorgeData.abouts.main_description.root.children[0]
            .children[0].text
        }
        Sub_description={
          SelbstfursorgeData.abouts.sub_description.root.children[0].children
        }
        subtitle={SelbstfursorgeData.abouts.subtitle}
        Inner_description={
          SelbstfursorgeData.abouts.inner_description.root.children[0].children
        }
      />
      <div className='h-[clamp(5.375rem,4.3rem+5.375vw,10.75rem)]'></div>
      <Reference
        Main_title={SelbstfursorgeData.Meine_Referenzen.title}
        Main_description={
          SelbstfursorgeData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={SelbstfursorgeData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Question
        title={SelbstfursorgeData.cta.title}
        description={
          SelbstfursorgeData.cta.description.root.children[0].children[0].text
        }
        cta_image={SelbstfursorgeData.cta.cta_image}
        BTN={SelbstfursorgeData.cta.link}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
      <Protrance
        title={SelbstfursorgeData.service.title}
        ImageArray={SelbstfursorgeData.service.nestedService}
      />
      <div className='h-[162px]'></div>
      <Reviews params={SelbstfursorgeData.Reviews.enableReviews} />
      <div className='h-[224px]'></div>
      <FAQ
        title={SelbstfursorgeData.faq.title}
        ArrayData={SelbstfursorgeData.faq.nestedfaq}
        SectionShow={SelbstfursorgeData.faq.enableFAQ}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page

export async function generateMetadata() {
  return generatePageMetadata("/selbstfursorge", {
    title: "selbstfursorge",
    description: "selbstfursorge",
  });
}