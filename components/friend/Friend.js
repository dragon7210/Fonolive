import Image from "next/image";

const Friend = () => {
  return (
    <div className="flex mb-[20px] w-[209px] relative">
      <Image alt="img" src="/image/Oval.png" width={30} height={30} />
      <div className="w-[10px] rounded-[99px] h-[10px] absolute bg-[#70FF00] top-[20px]"></div>
      <p className="font-[Poppins] text-[16px] text-[#999999] ml-[12px]">
        Robert D.
      </p>
    </div>
  );
};

export default Friend;
