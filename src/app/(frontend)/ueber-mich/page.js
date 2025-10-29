
import React from "react"
import Banner from '../components/Banner'
import Clients from '../components/Clients'
import Protrance from '../components/Protrance'
import Time_line from '../components/Time_line'
import Counter from '../components/Counter'
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import HowTofindMe from "../components/HowTofindMe"
import Map from '../components/map'
import Alldata from "../untils/AllDataFatch"
import SEO_schema from '../components/SEO_schema'
import generatePageMetadata from '../untils/generatePageMetadata'
const page = async () => {
  let UnerMichData;
  try {
    UnerMichData = await Alldata("/uber-mich");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!UnerMichData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SEO_schema slug="/uber-mich" faqs={""} />
      <Banner
        Heading={UnerMichData.hero.text}
        Banner={UnerMichData.hero.heroImage.url}
        BannerListdata={UnerMichData.hero.richText.root.children[0].children}
        BTN={UnerMichData.hero.link}
        container={UnerMichData.hero.container_Hight}
        Image_Position={UnerMichData.hero.Image_Position}
      />
      <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
      <Clients
        title={UnerMichData.partnerlogo.title}
        ImageArray={UnerMichData.partnerlogo.nestedSections}
      />
      <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
      <Raucherentwöhnung
        titleCenter={false}
        ImageUrl={UnerMichData.abouts.aboutsImage.url}
        Heading={UnerMichData.abouts.headding}
        description={
          UnerMichData.abouts.description.root.children[0].children[0].text
        }
        title={UnerMichData.abouts.title}
        main_description={
          UnerMichData.abouts.main_description.root.children[0].children[0].text
        }
        Sub_description={
          UnerMichData.abouts.Sub_description.root.children[0].children
        }
        subtitle={UnerMichData.abouts.subtitle}
        Inner_description={
          UnerMichData.abouts.Inner_description.root.children[0].children
        }
      />
      <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
      <Protrance
        title={UnerMichData.service.title}
        ImageArray={UnerMichData.service.nestedService}
      />
      <div className="h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]"></div>
      {/* <Timeline
        title={UnerMichData.wichtige_meilensteine.headding}
        description={
          UnerMichData.wichtige_meilensteine.main_description.root.children[0]
            .children[0].text
        }
        YearArray={UnerMichData.wichtige_meilensteine.nestedSections}
      /> */}
      <div className="h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]"></div>
      <Time_line
        title={UnerMichData.wichtige_meilensteine.headding}
        description={
          UnerMichData.wichtige_meilensteine.main_description.root.children[0]
            .children[0].text
        }
        YearArray={UnerMichData.wichtige_meilensteine.nestedSections}
      />
      <div className="h-[clamp(7rem,5.6rem+7vw,14rem)]"></div>
      <HowTofindMe
        ImageUrl={UnerMichData.abouts2.aboutsImage.url}
        title={UnerMichData.abouts2.title}
        description={UnerMichData.abouts2.description}
        ImageArrya={UnerMichData.abouts2.nestedSections}
      />
      <div className="h-[clamp(7rem,5.6rem+7vw,14rem)]"></div>
      <Map
        title={UnerMichData.ubermap.headding}
        description={
          UnerMichData.ubermap.description.root.children[0].children[0].text
        }
        ImageUrl={UnerMichData.ubermap.MapImage.url}
      />
      <div className="h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]"></div>
      <Counter
        title={UnerMichData.protance_zahlen.title}
        ImageArray={UnerMichData.protance_zahlen.nestedSections}
      />
      <div className="h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]"></div>
    </>
  );
}

export default page

export async function generateMetadata() {
  return generatePageMetadata("/uber-mich", {
    title: "uber-mich",
    description: "uber-mich",
  });
}