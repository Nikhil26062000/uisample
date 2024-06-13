import React from 'react'

const CallToAction = ({title}) => {
  return (
    <div>
         <button className="w-[149px] h-[40px] p-2 rounded-[6px] text-[#E5E6EB] border-2 border-[#d0d1d2] bg-[#242526] !mt-5 text-[16px] leading-[19.36px] ">
             {title}
            </button>
    </div>
  )
}

export default CallToAction