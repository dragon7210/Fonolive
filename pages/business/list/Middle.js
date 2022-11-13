import Image from "next/image";

import TabMenu from "../../../components/tabMenu/TabMenu";
import BusinessList from "../../../components/businessList";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Middle = () => {
  return (
    <div className="ml-[20px]">
      <TabMenu />
      <div className="flex relative">
        <p className="mt-[42px] font-[Poppins] text-[20px] font-[500]">
          Businesses
        </p>
        <button className="bg-[#545AF2] p-[13px] relative flex mt-[38px] rounded-[99px] w-[164px] ml-[390px]">
          <p className="text-[white] w-[121px] m-0 text-[12px] font-[Poppins] ">
            Create Businesses
          </p>
          <Image
            className="absolute right-[13px] top-[16px]"
            src="/svg/pencil.svg"
            width={10}
            height={10}
            alt="pluse"
          />
        </button>
      </div>
      <div className="mb-[83px]">
        {data.map((ele, index) => {
          return <BusinessList key={index} />;
        })}
      </div>
    </div>
  );
};

export default Middle;
