import Image from "next/image";

const Businesses = () => {
  return (
    <>
      <div className="flex bg-[white] cursor-pointer relative mt-[12px]">
        <div className="mt-[15px] ml-[27px] mb-[15px]">
          <Image
            className="business-img"
            src="/svg/garden.svg"
            alt="search"
            width="55"
            height="55"
          />
        </div>
        <div className="ml-[15px] mt-[23px]">
          <p className="font-[Poppins] text-[18px]">Clump Gardners</p>
          <div className="flex">
            <Image
              className="mr-[9px]"
              src="/svg/star.svg"
              alt="call"
              width="13"
              height="13"
            />
            <Image
              className="mr-[9px]"
              src="/svg/star.svg"
              alt="call"
              width="13"
              height="13"
            />
            <Image
              className="mr-[9px]"
              src="/svg/star.svg"
              alt="call"
              width="13"
              height="13"
            />
            <Image
              className="mr-[9px]"
              src="/svg/star.svg"
              alt="call"
              width="13"
              height="13"
            />
            <Image
              className="mr-[9px]"
              src="/svg/star.svg"
              alt="call"
              width="13"
              height="13"
            />
            <p>4.7</p>
          </div>
        </div>
        <Image
          className="absolute right-[30px] top-[23px]"
          src="/svg/phone.svg"
          alt="call"
          width="30"
          height="30"
        />
      </div>
    </>
  );
};

export default Businesses;
