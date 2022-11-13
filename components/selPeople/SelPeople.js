import Image from "next/image";

const SelPeople = ({ name }) => {
  return (
    <div className="flex relative w-[260px] pb-[20px]">
      <Image src="/image/Oval.png" width={30} height={30} alt="people" />
      <p className="ml-[12px] font-[Poppins] text-[#999999] text-[16px]">
        {name}
      </p>
      <button className="absolute right-[15px] rounded-[10px] px-[15px] py-[7px] bg-[#545AF2] ">
        <p className="text-[white] font-[Poppins] text-[12px] ">Follow</p>
      </button>
    </div>
  );
};

export default SelPeople;
