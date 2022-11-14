import Image from "next/image";
import { useState } from "react";

const HeaderPeople = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOut={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      className="relative"
    >
      {hover ? (
        <>
          <Image
            className="mr-[25px] h-[52px] rounded-[99px]"
            src="/image/oval.png"
            alt="me"
            width="52"
            height="52"
          />
          <Image
            className="mr-[25px]  rounded-[99px] bg-[#545AF2] w-[20px] h-[20px] absolute right-[0px] top-[0px]"
            src="/svg/pluse.svg"
            alt="me"
            width="9"
            height="9"
          />
        </>
      ) : (
        <Image
          className="mr-[25px] h-[52px] border-[#545AF2] border-[3px]  rounded-[99px]"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
      )}
    </div>
  );
};

export default HeaderPeople;
