import React from 'react'
import Header from "../components/Header"
import Alldata from '../untils/AllDataFatch';
import Mobile_buttons from "../components/Mobile_buttons"
const page = async() => {
    let MenusData;
    let HeaderDatas;
  try {
    MenusData = await Alldata("/menus");
    HeaderDatas = await Alldata("/header");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!MenusData || !HeaderDatas) {
    return <div>No data available.</div>;
  }
  return (
    <>
    <Header Menus={MenusData.menus} HeaderData={HeaderDatas} />
    <Mobile_buttons />
    </>
);
}

export default page