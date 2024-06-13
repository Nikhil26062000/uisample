import React from 'react'
import avatar from "../assets/dp.png";

const ProfileSection = () => {
  return (
    <div>
        <img src={avatar} alt="profilePic" className="w-[40px] h-[40px] rounded-[1.5px] cursor-pointer" />
    </div>
  )
}

export default ProfileSection