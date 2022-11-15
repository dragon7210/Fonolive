import Image from "next/image";

const Middle = () => {
  return (
    <div className="mt-[40px] ml-[30px] w-[650px]">
      <div className="bg-[white] px-[20px] py-[16px]  flex">
        <Image alt="img" src="/image/Oval.png" width={45} height={45} />
        <p className="ml-[20px] font-[Poppins] text-[16px] mt-[9px]">
          What’s on your mind?
        </p>
      </div>
      <div className="mt-[40px] bg-[white] p-[20px]">
        <div className="flex ">
          <div>
            <Image alt="img" src="/image/Oval.png" width={45} height={45} />
          </div>
          <div className="ml-[15px]">
            <p className="font-[Poppins] text-[18px] font-[500]">
              Steven Peterson
            </p>
            <p className="mt-[6px] font-[Poppins] text-[12px] text-[#999999]">
              01 May at 08:15 PM
            </p>
          </div>
        </div>
        <p className="mt-[7px] ml-[20px] mr-[53px] pb-[21px]">
          Morbi sem erat, molestie ornare nisl mollis, tempor sodales mauris.
          Cras hendrerit, neque cursus Morbi sem erat, molestie.
        </p>
        <div className="flex">
          <div className="w-[185px] h-[242px] bg-[black]"></div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
