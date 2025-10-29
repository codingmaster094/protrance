import Homepage from "./Home/page";
import Alldata from "./untils/AllDataFatch";
import "../../../public/css/globals.css"
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("./components/SchemaInjector"));

export default async function Home() {
  let schemaJSON = null;

  try {
    const metadata = await Alldata("/home");
    schemaJSON = JSON.stringify(metadata.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Homepage />
    </>
  );
}

export async function generateMetadata() {
  const metadata = await Alldata("/home");

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

