import TabMenu from "../../../components/tabMenu/TabMenu";
import Image from "next/image";

const Middle = () => {
  return (
    <div className="ml-[20px]">
      <TabMenu />
      <div className="flex relative">
        <p className="mt-[42px] font-[Poppins] text-[20px] font-[500]">
          Articles
        </p>
        <button className="bg-[#545AF2] p-[13px] relative flex mt-[38px] rounded-[99px] w-[164px] ml-[409px]">
          <p className="text-[white] w-[121px] m-0 text-[12px] font-[Poppins] ">
            Edit Article
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
      <div className="flex relative">
        <input
          className="w-[650px] mt-[29px] py-[14px] pl-[20px] font-[Poppins] text-[16px]"
          placeholder="Search..."
        />
        <Image
          className="absolute right-[20px] top-[45px]"
          src="/svg/search.svg"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <div className="mt-[21px] bg-[white] w-[650px]">
        <p className="pt-[21px] pl-[25px] font-[Poppins] font-[500] text-[16px]">
          Categories
        </p>
        <div className="ml-[14px] mr-[19px] h-[221px] bg-[#E3E4FF] rounded-[10px]"></div>
        <p className="pt-[22px] pl-[25px] font-[Poppins] font-[500] text-[18px]">
          Focus - On learning and Creating Rather Than Entertainment and
          Distraction
        </p>
        <p className="mt-[10px] text-[#666666] font-[Poppins] ml-[19px]">
          Education
        </p>
        <div>
          <div className="mt-[25px] ml-[19px] flex relative">
            <Image
              className="oval"
              src="/image/oval.png"
              alt="me"
              width="48"
              height="48"
            />
            <p className="font-[Poppins] text-[13px] text-[#666666] ml-[10px] mt-[15px]">
              Brandon smith
            </p>
            <p className="absolute right-[23px] font-[Poppins] text-[13px] text-[#666666] mt-[15px]">
              2 Hours
            </p>
          </div>
        </div>
        <p className="mt-[12px] text-[12px] font-[Poppins] ml-[19px] pb-[50px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-center shadow rounded-[10px] pb-[65px]">
          <div className="p-[15px] shadow-lg">
            <Image src="/svg/upCore.svg" width={18} height={15} alt="Upcore" />
          </div>
          <div className="p-[15px] shadow-lg">
            <Image
              src="/svg/downCore.svg"
              width={18}
              height={15}
              alt="Upcore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
