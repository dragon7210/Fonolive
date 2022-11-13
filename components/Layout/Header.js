import Image from "next/image";

const Header = () => {
  return (
    <div className="flex">
      <p className="pt-[27px] pl-[61px] text-[80px] font-[Teko]">Fonolive</p>
      <div className="flex ml-[91px] pt-[58px]">
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />{" "}
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />{" "}
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />{" "}
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />{" "}
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
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
      <div className="ml-[29px] mt-[71px]">
        <Image
          className="searchImg"
          src="/svg/Notification.svg"
          alt="search"
          width="20"
          height="26"
        />
      </div>
    </div>
  );
};

export default Header;
