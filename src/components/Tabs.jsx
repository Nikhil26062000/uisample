import React from 'react'

const Tabs = () => {
  return (
   
     <div
        className="w-[314px] h-[48px] py-[4px] px-[24px] absolute top-[83px] left-[109.84px] rounded-[40px] flex justify-center items-center gap-[16px]"
        style={{
          backgroundColor: "#242526",
          filter:
            "drop-shadow(-2px -2px 6px #444A53) drop-shadow(4px 4px 12px #000000)",
        }}
      >
        <button className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-[#E5E6EB] w-[107.38px] rounded-[40px] p-1">
          Your listing
        </button>

        <div
          style={{
            boxShadow:
              "2px 2px 6px 0px #000000 inset, -1px -1px 3px 0px #444A53 inset", // Combined shadow styles
            background: "#18191A",
            borderRadius: "40px",
          }}
        >
          <button
            className="hover:bg-slate-500 text-[16px] leading-[19.36px] text-[#E5E6EB] w-[123.68px] rounded-[40px] p-[10px]"
            style={{
              boxShadow: "-2px -2px 6px 0px #444A53, 4px 4px 4px 0px #00000040", // Combined shadow styles
            }}
          >
            Finish Listing
          </button>
        </div>
      </div>
  
  )
}

export default Tabs