import React from 'react'
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Contactform from "../components/Contactform"
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let KontaktData;
  let schemaJSON = null;
  try {
    KontaktData = await Alldata("/kontakt");
    schemaJSON = JSON.stringify(KontaktData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!KontaktData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={KontaktData.hero.text}
        Banner={KontaktData.hero.heroImage.url}
        BannerListdata={KontaktData.hero.richText.root.children[0].children}
        BTN={KontaktData.hero.link}
        container={KontaktData.hero.container_Hight}
        Image_Position={KontaktData.hero.Image_Position}
      />
      <div className='h-[clamp(3.125rem,2.5rem+3.125vw,6.25rem)]'></div>
      <Contact
        title={KontaktData.Kontaktmöglichkeiten.headding}
        description={
          KontaktData.Kontaktmöglichkeiten.main_description.root.children[0]
            .children[0].text
        }
        ImageArray={KontaktData.Kontaktmöglichkeiten.nestedSections}
      />
      <div className='h-[212px]'></div>
      <Contactform
        title={KontaktData.Kontaktmap.headding}
        description={
          KontaktData.Kontaktmap.description.root.children[0].children[0].text
        }
        Form_title={KontaktData.Kontaktmap.Form_title}
        MapImage={KontaktData.Kontaktmap.MapImage.url}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page

export async function generateMetadata() {
  const metadata = await Alldata("/kontakt");

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