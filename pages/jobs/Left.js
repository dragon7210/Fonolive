import Image from "next/image";
import Selector from "../../components/selector";

const Left = () => {
  return (
    <>
      <div className="ml-[41px]">
        <p className="mt-[39px] text-[22px] font-[Poppins] font-[500]">
          Filters
        </p>
        <p className="mt-[26px] text-[16px] font-[Poppins]">Location</p>
        <div className="relative flex">
          <input
            className="w-[290px] px-[20px] py-[14px] rounded-[99px] mt-[18px]"
            placeholder="Enter Location"
          />
          <Image
            className="absolute top-[33px] right-[15px]"
            src="/svg/position.svg"
            alt="me"
            width="14"
            height="20"
          />
        </div>
        <p className="font-[Poppins] text-[16px] mt-[40px] mb-[21px]">
          Job Type
        </p>
        <Selector name="Full-time" />
        <Selector name="Part-time" />
        <Selector name="Contractual" />
        <Selector name="Hourly" />
        <Selector name="Intership" />
      </div>
    </>
  );
};

export default Left;
