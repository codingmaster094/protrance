import React from "react";
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let ImpressumData;
  let schemaJSON = null;
  try {
    ImpressumData = await Alldata("/impressum");
    schemaJSON = JSON.stringify(ImpressumData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ImpressumData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <div className="h-[137px] bg-accent"></div>
      <section className="policy_content term-policy">
        <div className="py-4 md:py-6 2xl:py-[100px] bg-[#9a1a60] text-white">
          <div className="container mx-auto px-[15px] ">
            <h1 className="text-h2">Impressum</h1>
          </div>
        </div>
        <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: ImpressumData.contents.Gutenberg_html,
            }}
          ></div>
        </div>
        <div className="h-[clamp(2.5rem,-1.5789rem+6.5789vw,5rem)]"></div>
      </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  const metadata = await Alldata("/impressum");

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