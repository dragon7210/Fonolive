import Image from "next/image";
import Review from "../../../components/review";

const data = [0, 1, 2, 3];
const data1 = [0, 1, 2, 3, 4];
const Middle = () => {
  return (
    <div className="ml-[20px] ">
      <div className="flex relative">
        <p className="mt-[39px] font-[Poppins] text-[20px] font-[500]">
          Businesses
        </p>
        <button className="bg-[#545AF2] p-[13px] relative flex mt-[30px] rounded-[99px] w-[164px] ml-[370px]">
          <p className="text-[white] w-[121px] m-0 text-[12px] font-[Poppins] ">
            Edit Businesses
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
      <div className="bg-[white]">
        <div className="mt-[14px] relative ">
          <Image alt="back" height={360} width={650} src="/image/back1.png" />
          <div className="flex absolute bg-[black] opacity-[0.65] rounded-[10px] top-[10px] right-[10px]">
            <div className="px-[18px] py-[11px]">
              <Image alt="back" height={18} width={18} src="/svg/phone.svg" />
            </div>
            <div className="px-[18px] py-[11px]">
              <Image alt="back" height={18} width={18} src="/svg/message.svg" />
            </div>
          </div>
          <div className="flex absolute bg-[black] opacity-[0.65] rounded-[10px] top-[312px] right-[10px]">
            <div className="px-[18px] py-[11px]">
              <Image alt="back" height={18} width={18} src="/svg/uphand.svg" />
            </div>
          </div>
        </div>
        <div className="px-[14px] pt-[24px]">
          <div className="flex justify-between">
            <p className="text-[18px] font-[Poppins] font-[500]">
              Clump Gardners
            </p>
            <p className="text-[14px] text-[#FF1616] font-[Poppins] font-[500]">
              Report
            </p>
          </div>
          <div className="flex mt-[10px]">
            {data1.map((ele, index) => {
              return (
                <Image
                  key={index}
                  alt="star"
                  src="/svg/star.svg"
                  width={17}
                  height={17}
                  className="mr-[7px]"
                />
              );
            })}
          </div>
          <div className="mt-[30px]">
            <p className="font-[Poppins] text-[14px] font-[500]">About</p>
            <p className="mt-[7px] w-[617px] font-[Poppins] text-[12px]">
              Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris
              cras hendrerit, neque cursus Morbi sem erat, fdeto molestie. Morbi
              sem erat, molestie ornare nisl mollis, tempor letis mauris cras
              hendrerit, neque cursus Morbi sem erat, molestie.
            </p>
          </div>
          <div className="mt-[25px] flex justify-between">
            <button className="bg-[#F1F1F1] w-[299px] py-[11px] rounded-[12px] border-[#545AF2] border-[1px] border-dotted">
              <p className="text-[20px] font-[Poppins] font-[500]">256</p>
              <p className="text-[14px] font-[Poppins] font-[500] text-[#545AF2]">
                Likes
              </p>
            </button>
            <button className="bg-[#F1F1F1] w-[299px] py-[11px] rounded-[12px] border-[#545AF2] border-[1px] border-dotted">
              <p className="text-[20px] font-[Poppins] font-[500]">200</p>
              <p className="text-[14px] font-[Poppins] font-[500] text-[#545AF2]">
                Reviews
              </p>
            </button>
          </div>
          <div className="bg-[#F1F1F1] px-[20px] py-[15px] mt-[20px] ">
            <div className="flex justify-between">
              <p className="font-[Poppins] text-[16px] font-[500]">Reviews</p>
              <button className="border-dotted border-[#F4AC03] border-[1px] px-[12px] py-[8px] rounded-[5px]">
                <p className="font-[Poppins] text-[12px] text-[#F4AC03]">
                  Write a review
                </p>
              </button>
            </div>
            <div className="mt-[25px]">
              {data.map((ele, index) => {
                return <Review key={index} />;
              })}
            </div>
            <p className="text-center mt-[20px] font-[Poppins] text-[#545AF2] text-[14px]">
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
