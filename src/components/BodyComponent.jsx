import React from "react";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

import Breadcrumb from "./Breadcrumb";
import Container from "./Container";
import Tabs from "./Tabs";

const BodyComponent = () => {
 

  const breadcrumbItems = [
    { name: "Home", link: "#" },
    { name: "Create Listing", link: "#" },
    { name: "import Airbnb listing" }, //
  ];
  return (
    <div className="w-[100%] h-[100vh] bg-[#242526] relative">
      {/* ------------------------- Breadcrumb -----------------------------------------------------*/}
      <div className="absolute right-0 pr-16 py-6 text-[#59595d]">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* ------------------------------------- Buttons -------------------------------------------*/}
     <Tabs/>

      {/* -------------------------1st Rectangular box --------------------------------------- */}
      <div className="absolute w-[738px] h-[209px] top-[160px] left-[109.84px] bg-[#18191A] rounded-md">
        <Container image={slide3} blueWidth="75" blackWidth="25" name="Ocean Villa"/>
      </div>

      {/* ----------------------------------- 2nd Rectangular Box ----------------------------------*/}
      <div className="absolute w-[738px] h-[209px] top-[393px] left-[109.84px] bg-[#18191a] rounded-md">
        <Container image={slide2} blueWidth="50" blackWidth="50" name="Boho Villa"/>
      </div>
    </div>
  );
};

export default BodyComponent;
