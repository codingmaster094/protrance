import React from 'react'
import AllPost from '../../untils/AllPostFatch';
import Blogdetails from '../../components/Blogdetails';
import Blogbanner from '../../components/Blogbanner';
import BlogClients from '../../components/BlogClients';
import Post_SEO_schema from '../../components/Post_SEO_schema'
import generatepostMetadata from '../../untils/generatepostMetadata';
const page = async ({ params }) => {
  const { slug } = await params
  let SingleBlogData;

  try {
    SingleBlogData = await AllPost(`${slug}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!SingleBlogData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Post_SEO_schema slug={`${slug}`} faqs={SingleBlogData.docs[0].faq.nestedfaq} />
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

export async function generateMetadata({params}) {
  const { slug } = await params
  return generatepostMetadata(`${slug}`, {
    title: `${slug}`,
    description: `${slug}`,
  });
}
