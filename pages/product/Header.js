import Image from "next/image";

const Header = () => {
  return (
    <div className="flex bg-[white]">
      <div className="py-[16px] ml-[300px]">
        <Image alt="logo" width={32} height={32} src="/svg/mark.svg" />
      </div>
      <div className="flex ml-[511px] mt-[20px]">
        <p className="mr-[24px] font-[Poppins] text-[16px]">Shop</p>
        <p className="mr-[24px] font-[Poppins] text-[16px]">Classifieds</p>
        <p className="mr-[24px] font-[Poppins] text-[16px]">Rentals</p>
      </div>
      <div className="ml-[207px] flex">
        <Image
          className="mr-[24px]"
          width={21}
          height={21}
          src="/svg/draft.svg"
          alt="icon"
        />
        <Image
          className="mr-[24px]"
          width={21}
          height={21}
          src="/svg/cart.svg"
          alt="icon"
        />
        <Image
          className="mr-[24px]"
          width={21}
          height={21}
          src="/svg/heart.svg"
          alt="icon"
        />
        <Image
          className="mr-[24px]"
          width={21}
          height={21}
          src="/svg/dashboard.svg"
          alt="icon"
        />
        <Image
          className="mr-[24px]"
          width={21}
          height={21}
          src="/svg/messagefill.svg"
          alt="icon"
        />
      </div>
      <div className="mt-[12px]">
        <button className="bg-[#545AF2] px-[16px] py-[8px] rounded-[6px]">
          <p className="font-[Poppins] text-[16px] text-[white]">Post Ad</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
