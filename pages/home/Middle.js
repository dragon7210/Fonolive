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
        <div className="flex justify-between">
          <div>
            <div className="w-[185px] h-[242px] bg-[black] rounded-[10px]"></div>
            <div className="flex mt-[27px] justify-center">
              <Image src="/svg/message.svg" alt="img" width={22} height={18} />
              <p>21 Comments</p>
            </div>
          </div>
          <div>
            <div className="w-[185px] h-[242px] bg-[black] rounded-[10px]"></div>
            <div className="flex mt-[27px] justify-center">
              <Image src="/svg/heart.svg" alt="img" width={22} height={18} />
              <p>120K Likes</p>
            </div>
          </div>
          <div>
            <div className="w-[185px] h-[242px] bg-[black] rounded-[10px]"></div>
            <div className="flex mt-[27px] justify-center">
              <Image src="/svg/share.svg" alt="img" width={22} height={18} />
              <p>123 Share</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] px-[18px]">
          <input
            className="border-[#999999] w-[571px] border-[1px] px-[21px] py-[13px] rounded-[20px] font-[Poppins] text-[14px]"
            placeholder="Write a comment"
          ></input>
        </div>
      </div>
      <div className="mt-[45px] bg-[white] p-[20px]">
        <div className="flex relative">
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
          <div className="absolute right-[0px]">
            <Image alt="img" src="/svg/shape1.svg" width={3} height={15} />
          </div>
        </div>
        <p className="w-[569px] mt-[27px] font-[Poppins] text-[14px]">
          Morbi sem erat, molestie ornare nisl mollis, tempor sodales mauris.
          Cras hendrerit, neque cursus Morbi sem erat, molestie.
        </p>
        <div className="flex mt-[21px] justify-between">
          <div className="w-[185px] h-[160px] bg-black rounded-t-lg"></div>
          <div className="w-[185px] h-[160px] bg-black rounded-t-lg"></div>
          <div className="w-[185px] h-[160px] bg-black rounded-t-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
