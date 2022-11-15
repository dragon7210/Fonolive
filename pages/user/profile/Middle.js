import Image from "next/image";
import UserProfile from "../../../components/userProfile";
import userProfile from "../../../components/userProfile";

const Middle = () => {
  return (
    <div>
      <div className="mt-[40px] w-[968px] ml-[30px] bg-[white]">
        <div className="flex">
          <div className="text-center mt-[32px] ml-[61px]">
            <Image
              className="border-[#545AF2] border-[3px] rounded-[99px] mx-auto"
              width={120}
              height={115}
              alt="people"
              src="/image/Oval.png"
            />
            <p className="mt-[17px] font-[Poppins] text-[22px]">
              Alejandro Suarez
            </p>
            <p className="mt-[9px] font-[Poppins] text-[12px] text-[#8D8D8D]">
              @alej_1989
            </p>
            <p className="mt-[11px] font-[Poppins] text-[16px] text-[#545AF2]">
              Following
            </p>
          </div>
          <div className="mt-[63px] ml-[159px] ">
            <div className="flex ">
              <div className="text-center">
                <p className="font-[Poppins] text-[22px] text-[#545AF2]">
                  2,000
                </p>
                <p className="mt-[7px] font-[Poppins] text-[18px] text-[#8D8D8D]">
                  Post
                </p>
              </div>
              <div className="text-center ml-[100px]">
                <p className="font-[Poppins] text-[22px] text-[#545AF2]">
                  1,120
                </p>
                <p className="mt-[7px] font-[Poppins] text-[18px] text-[#8D8D8D]">
                  Friends
                </p>
              </div>
            </div>
            <div className="flex mt-[52px] justify-between px-[10px]">
              <Image width={31} height={30} alt="people" src="/svg/phone.svg" />
              <Image
                width={31}
                height={30}
                alt="people"
                src="/svg/camera.svg"
              />
              <Image
                width={31}
                height={30}
                alt="people"
                src="/svg/message.svg"
              />
            </div>
          </div>
          <div className="mt-[60px] ml-[165px]">
            <button className="bg-[#545AF2] px-[17px] py-[11px] rounded-[99px] mb-[36px]">
              <p className="w-[91px] font-[Poppins] font-[500] text-[14px] text-[white]">
                UnFollow
              </p>
            </button>
            <button className="bg-[#FF1616] px-[17px] py-[11px] rounded-[99px] mb-[36px]">
              <p className="w-[91px] font-[Poppins] font-[500] text-[14px] text-[white]">
                Block
              </p>
            </button>
            <button className="bg-[#F17E13] px-[17px] py-[11px] rounded-[99px] mb-[36px]">
              <p className="w-[91px] font-[Poppins] font-[500] text-[14px] text-[white]">
                Report
              </p>
            </button>
          </div>
        </div>
        <div className="mt-[57px] ml-[61px]">
          <p className="font-[Poppins] text-[24px] font-[500]">Bio</p>
          <p className="mt-[15px] font-[Poppins] text-[14px] mr-[85px]">
            Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris
            cras hendrerit, neque cursus Morbi sem erat, fdeto molestie. Morbi
            sem erat, molestie ornare nisl mollis, tempor letis mauris cras
            hendrerit, neque cursus Morbi sem erat, molestie.
          </p>
          <div className="flex mt-[30px] pb-[27px]">
            <div className="border-r-2 border-[#666666]">
              <p className="font-[Poppins] text-[24px] font-[500]">Hobbies</p>
              <div className="flex mt-[15px]">
                <div className="w-[90px] border-r-2 border-[black] ">
                  <p className="font-[Poppins] text-[16px] ">Dancing</p>
                </div>
                <div className="w-[122px] border-r-2 border-[black] px-[20px]">
                  <p className="font-[Poppins] text-[16px] ">Travelling</p>
                </div>
                <div className="w-[102px] pl-[20px]">
                  <p className="font-[Poppins] text-[16px] ">Reading</p>
                </div>
              </div>
            </div>
            <div className="ml-[25px]">
              <p className="font-[Poppins] text-[24px] font-[500]">Age</p>
              <p className="mt-[15px] font-[Poppins] text-[16px]">26 Years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[30px] justify-between">
        <UserProfile />
        <UserProfile />
      </div>
    </div>
  );
};

export default Middle;
