import React from 'react'
import Client from '../components/Client'
import AllData from "../untils/AllDataFatch"
const page = async ({ params }) => {
  let ReviewSData;
  try {
    ReviewSData = await AllData("/reviews");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ReviewSData) {
    return <div>No data available.</div>;
  }

  return (
    <Client
      title={ReviewSData.title}
      description={ReviewSData.description.root.children[0].children[0].text}
      LogoImageArray={ReviewSData.nestedlogos}
      ReviewImageArray={ReviewSData.nestedReviews}
      SectionShow={params}
    />)
};

export default page