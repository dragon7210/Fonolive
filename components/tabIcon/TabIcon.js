import Image from "next/image";
import { useState } from "react";

const TabIcon = ({ imgName, name }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-[108px] text-center pb-[12px] pt-[21px] cursor-pointer shadow-inner border-t-4 hover:border-t-4 hover:border-[#545AF2]"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover ? (
        <>
          <Image
            className="m-auto "
            src={`/svg/${imgName}hover.svg`}
            alt="me"
            width="28"
            height="28"
          />
          <p className="font-[Poppins] text-[12px] text-[#545AF2]">{name}</p>
        </>
      ) : (
        <>
          <Image
            className="m-auto "
            src={`/svg/${imgName}.svg`}
            alt="me"
            width="28"
            height="28"
          />
          <p className="font-[Poppins] text-[12px]">{name}</p>
        </>
      )}
    </div>
  );
};

export default TabIcon;
