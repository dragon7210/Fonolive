import Image from "next/image";

const UserProfile = () => {
  return (
    <div className=" bg-[white] ml-[30px] p-[20px] w-[435px]">
      <div className="flex">
        <div>
          <Image alt="people" src="/image/Oval.png" width={45} height={45} />
        </div>
        <div className="ml-[15px]">
          <p className="font-[Poppins] text-[18px] font-[500]">
            Alejandro Suarez
          </p>
          <p className="font-[Poppins] text-[12px] mt-[4px] text-[#999999]">
            01 May at 08:15 PM
          </p>
        </div>
        <div className="ml-[179px]">
          <Image alt="people" src="/svg/shape1.svg" width={3} height={15} />
        </div>
      </div>
      <p className="mt-[27px] font-[Poppins] text-[14px]">
        Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris cras
        hendrerit, neque cursus Morbi sem erat, molestie.
      </p>
      <div className="flex mt-[16px]">
        <div className="w-[185px] h-[120px] bg-[black] rounded-t-lg"></div>
        <div className="w-[185px] h-[120px] bg-[black] rounded-t-lg ml-[25px]"></div>
      </div>
    </div>
  );
};

export default UserProfile;
