import Image from "next/image";
import { useState } from "react";
import HeaderPeople from "../headerPeople";

const data = [0, 1, 2, 3, 4, 5];

const Header = () => {
  return (
    <div className="flex">
      <p className="pt-[27px] pl-[61px] text-[80px] font-[Teko]">Fonolive</p>
      <div className="flex ml-[91px] pt-[58px]">
        {data.map((ele, index) => {
          return <HeaderPeople key={index} />;
        })}
      </div>
      <div className="ml-[65px] mt-[58px] flex relative">
        <input
          className="px-[20px] py-[14px] rounded-[99px] w-[360px] h-[52px] border-0"
          placeholder="are you in search of something?"
        />
        <Image
          className="absolute right-[19px] top-[15px]"
          src="/svg/search.svg"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <div className="ml-[29px] mt-[71px] relative">
        <Image
          className="searchImg"
          src="/svg/Notification.svg"
          alt="search"
          width="20"
          height="26"
        />
        <div className="w-[10px] h-[10px] bg-[#545AF2] rounded-[99px] top-[-2px] right-[0px] absolute" />
      </div>
    </div>
  );
};

export default Header;
