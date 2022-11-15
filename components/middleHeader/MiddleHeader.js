import Image from "next/image";
import TabMenu from "../tabMenu";

const MiddleHeader = () => {
  return (
    <div className="mt-[24px] ml-[31px] flex">
      <div className="bg-[white] flex w-[238px] rounded-[10px]">
        <div className="p-[14px] relative">
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="48"
            height="48"
          />
          <div className="w-[16px] h-[16px] bg-[#70FF00] rounded-[99px] absolute top-[46px] right-[16px]" />
        </div>
        <div className="mt-[17px] ml-[12px] pr-[21px]">
          <p className="font-[Poppins] text-[blue] text-[15px]">
            Rose Satterfield
          </p>
          <p className="font-[Poppins] text-[12px]">@rozetka_1993</p>
        </div>
      </div>
      <TabMenu />
      <div className="ml-[29px]">
        <Image
          src="/svg/Groupe.svg"
          width={30}
          alt="groupe"
          height={30}
          style={{ marginTop: "29px" }}
        />
      </div>
    </div>
  );
};

export default MiddleHeader;
