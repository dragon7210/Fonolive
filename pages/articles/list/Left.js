import Image from "next/image";
import Selector from "../../../components/selector/Selector";

const Left = () => {
  return (
    <>
      <div className="mt-[24px] ml-[41px]">
        <div className="bg-[white] flex w-[238px] rounded-[10px]">
          <div className="p-[14px]">
            <Image
              className="oval"
              src="/image/oval.png"
              alt="me"
              width="48"
              height="48"
            />
          </div>
          <div className="mt-[17px] ml-[12px] pr-[21px]">
            <p className="font-[Poppins] text-[blue] text-[15px]">
              Rose Satterfield
            </p>
            <p className="font-[Poppins] text-[12px]">@rozetka_1993</p>
          </div>
        </div>
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
            src="/image/Vector.png"
            alt="me"
            width="14"
            height="20"
          />
        </div>
        <p className="font-[Poppins] text-[16px] mt-[40px] mb-[21px]">
          Job Type
        </p>
        <Selector name="Wallstreet" />
        <Selector name="Times Sqaure" />
        <Selector name="Eiffel tower" />
      </div>
    </>
  );
};

export default Left;
