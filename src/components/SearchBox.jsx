import React from 'react'
import TelegramIcon from "@mui/icons-material/Telegram";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div className="bg-[#242526] flex ml-[150px] gap-10 px-2 py-2 border-[#a0a1a2] rounded-md border-2">
          <div className="flex">
            <TelegramIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2 text-[16px] ">Location</p>
          </div>
          <div className="flex">
            <CalendarMonthIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2 text-[16px]">
              check in - check out
            </p>
          </div>
          <div className="flex">
            <PersonOutlineIcon className="text-[#B1B3B8] rounded-[1.5px]" />
            <p className="text-[#B1B3B8] pl-2">Guests</p>
          </div>
          <div className=" relative w-[28px] h-[28px] rounded-full bg-[#0066ff] mr-2">
            <SearchIcon className="absolute text-[#B1B3B8] top-1 left-1 text-[16px]" />
          </div>
        </div>
  )
}

export default SearchBox