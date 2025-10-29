import React from 'react'
import AllPost from '../../untils/All PostFatch';
import Blogdetails from '../../components/Blogdetails';
import Blogbanner from '../../components/Blogbanner';
import BlogClients from '../../components/BlogClients';
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../../components/SchemaInjector"));
const page = async ({ params }) => {
  const { slug } = await params
  let SingleBlogData;
  let schemaJSON = null;

  try {
    SingleBlogData = await AllPost(`/posts?where[slug][equals]=${slug}`);
    schemaJSON = JSON.stringify(
      SingleBlogData.docs[0].seo.structuredData
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!SingleBlogData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Blogbanner
        Heading={SingleBlogData.docs[0].hero.text}
        Banner={SingleBlogData.docs[0].hero.heroImage.url}
        BannerListdata={
          SingleBlogData.docs[0].hero.richText.root.children[0].children
        }
        container={SingleBlogData.docs[0].hero.container_Hight}
        Image_Position={SingleBlogData.docs[0].hero.Image_Position}
      />
      <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
      <BlogClients
        title={SingleBlogData.docs[0].partnerlogo.title}
        ImageArray={SingleBlogData.docs[0].partnerlogo.nestedSections}
      />
      <div className="h-[clamp(6rem,4.8rem+6vw,12rem)]"></div>
      <Blogdetails
        bloAboutTitle={SingleBlogData.docs[0].Blog_About.headding}
        blogContent={
          SingleBlogData.docs[0].Blog_About.description.root.children[0]
            .children
        }
        cta_title={SingleBlogData.docs[0].cta.title}
        cta_description={
          SingleBlogData.docs[0].cta.description.root.children[0].children[0]
            .text
        }
        cta_BTN={SingleBlogData.docs[0].cta.link}
        cta_image={SingleBlogData.docs[0].cta.cta_image}
        blogcreatedAt={SingleBlogData.docs[0].publishedDate}
        blogupdatedAt={SingleBlogData.docs[0].updatedAt}
        gutenbergData={SingleBlogData.docs[0].contents.Gutenberg_html}
        FAQ={SingleBlogData.docs[0].faq}
      />
      <div className="h-[clamp(3.5rem,2.8rem+3.5vw,7rem)]"></div>
    </>
  );
}

export default page

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = await AllPost(`/posts?where[slug][equals]=${slug}`);
  const title = metadata.docs[0]?.seo?.meta?.title || "Default Title";
  const description = metadata.docs[0]?.seo?.meta?.description || "Default Description";
  const canonical =
    metadata.docs[0]?.seo?.meta?.canonicalUrl ||
    "";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}