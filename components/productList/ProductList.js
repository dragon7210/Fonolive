import Image from "next/image";

const ProductList = () => {
  return (
    <div className="rounded-[6px] w-[312px] bg-[white]">
      <div className="relative">
        <Image src="/image/back2.png" width={312} height={180} alt="back2" />
        <Image
          className="absolute right-[12px] top-[13px]"
          src="/svg/heartout.svg"
          alt="heart"
          width={20}
          height={188}
        />
      </div>
      <div className="p-[20px]">
        <p className="font-[Poppins] font-[500] text-[18px] text-[#4F4F4F]">
          Lorem Ipsum Dolor Lorem Ips.
        </p>
        <div className="flex mt-[10px]">
          <p className="font-[Poppins] font-[500] text-[18px] ">$5000</p>
          <Image
            className="ml-[20px]"
            alt="bus"
            src="/svg/bus.svg"
            width={48}
            height={20}
          />
        </div>
        <div className="flex mt-[10px] justify-between">
          <p className="font-[Poppins] text-[14px] text-[#4F4F4F]">506 sold</p>
          <div className="flex">
            <Image
              className="mr-[2px]"
              alt="star"
              src="/svg/star.svg"
              height={17}
              width={17}
            />
            <Image
              className="mr-[2px]"
              alt="star"
              src="/svg/star.svg"
              height={17}
              width={17}
            />
            <Image
              className="mr-[2px]"
              alt="star"
              src="/svg/star.svg"
              height={17}
              width={17}
            />
            <Image
              className="mr-[2px]"
              alt="star"
              src="/svg/star.svg"
              height={17}
              width={17}
            />
            <Image
              className="mr-[2px]"
              alt="star"
              src="/svg/star.svg"
              height={17}
              width={17}
            />
          </div>
          <p className="font-[Poppins] text-[14px] text-[#4F4F4F]">
            50 Reviews
          </p>
        </div>
        <div className="mt-[20px]">
          <p className="text-[#545AF2] font-[Poppins] text-[14px] font-[500]">
            Bd Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
