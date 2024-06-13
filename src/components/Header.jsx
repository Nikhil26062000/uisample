import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import chat from "../assets/button.png";
import SearchBox from "./SearchBox";
import ProfileSection from "./ProfileSection";

const Header = () => {
  return (
    <div className="w-[100%] h-[80px] bg-[#18191a] flex ">
      {/* Header left section which contains 3 sections */}
      <div className="flex justify-start items-center w-[90%] h-[80px] pl-[109.84px]">
        {/* For logo and names */}
        <div className="w-[143.17px] h-[28.32px]   ">
          <p className="text-[#FFFFFF] text-xl">
            Stay<span className="text-[#60B0FB]">n</span>
            <span className="">Earn</span>
          </p>
        </div>

        {/* A single line  */}

        <div className="w-[48px] border-[1px] bg-[#D3D4D5]   transform -translate-x-1/2 -translate-y-1/2 -rotate-90"></div>
        {/* dropdown menu */}
        <div className="">
          <div className="flex">
            <p className="w-[39px] h-[22px] text-[18px] text-[#E5E6EB] leading-[21.78px]">
              stay
            </p>
            <ArrowDropDownIcon className="text-[#E5E6EB]" />
          </div>
        </div>
        {/* Check-in and Check-out */}
        <SearchBox />
      </div>
      {/* Header right section which contains one section */}
      <div className="flex justify-start h-[80px] items-center gap-6">
        <img
          src={chat}
          alt="message"
          className="w-[48px] h-[48px] rounded-[1.5px]"
        />
        <ProfileSection />
      </div>
    </div>
  );
};

export default Header;
