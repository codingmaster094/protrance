import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Blog from "../components/Blog"
import Alldata from "../untils/AllDataFatch"
import AllPost from '../untils/All PostFatch'
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let BlogData;
  let AllpostData
  let schemaJSON = null;

  try {
    BlogData = await Alldata("/blog");
    AllpostData = await AllPost("/posts");
    schemaJSON = JSON.stringify(BlogData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!BlogData || !AllpostData) {
    return <div>No data available.</div>;
  }


  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={BlogData.hero.text}
        Banner={BlogData.hero.heroImage.url}
        BannerListdata={BlogData.hero.richText.root.children[0].children}
        BTN={BlogData.hero.link}
        container={BlogData.hero.container_Hight}
        Image_Position={BlogData.hero.Image_Position}
      />
      <div className='h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]'></div>
      <Clients
        title={BlogData.partnerlogo.title}
        ImageArray={BlogData.partnerlogo.nestedSections}
      />
      <div className='h-[clamp(6rem,4.8rem+6vw,12rem)]'></div>
      <Blog
        title={BlogData.blog_list_title.title}
        AllPostDetails={AllpostData.docs}
      />
      <div className='h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]'></div>
    </>
  );
}

export default page
export async function generateMetadata() {
  const metadata = await Alldata("/blog");

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