import TabMenu from "../../../components/tabMenu/TabMenu";
import Image from "next/image";

const Middle = () => {
  return (
    <div className="ml-[20px] w-[648px]">
      <TabMenu />
      <div className="bg-[white] p-[20px] mt-[39px]">
        <div className="flex relative">
          <p className="font-[Poppins] text-[16px] font-[500]">
            UI/UX Designer / Frontend Engineer{" "}
          </p>
          <p className="absolute right-0 font-[Poppins] text-[16px] font-[500]">
            Full-time
          </p>
        </div>
        <div className="flex relative">
          <p className="font-[Poppins] text-[14px] font-[500]">
            Creative Thoughts Informatics in Indore, MP, INDIA
          </p>
          <p className="absolute right-0 font-[Poppins] text-[12px] font-[500]">
            2 days ago
          </p>
        </div>
        <div className="mt-[51px]">
          <p className="font-[Poppins] text-[14px] font-[500]">
            Job Description
          </p>
          <p className="mt-[10px] font-[Poppins] text-[14px]">
            Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris
            cras hendrerit, neque cursus Morbi sem erat, fdeto molestie. Morbi
            sem erat, molestie ornare nisl mollis, tempor letis mauris cras
            hendrerit, neque cursus Morbi sem erat, molestie.
          </p>
        </div>
        <div className="mt-[35px]">
          <p className="font-[Poppins] text-[14px] font-[500]">
            Salary Criteria
          </p>
          <p className="font-[Poppins] text-[14px]">
            3, 00, 000 - 5, 00, 000 lakh per annum
          </p>
        </div>
      </div>
      <div className="bg-[white] p-[20px] mt-[6px]">
        <p className="font-[Poppins] text-[14px] font-[500]">
          Upload your resume .pdf
        </p>
        <div className="flex">
          <div className="w-[250px] h-[120px] text-center border-2 border-[#545AF2] rounded-[10px] mt-[28px]">
            <Image
              className="mx-auto mt-[22px]"
              alt="pluse"
              src="/svg/file.svg"
              width="36"
              height="40"
            />
            <p className="font-[Poppins] text-[14px] text-[#545AF2] font-[500] mt-[21px]">
              Drag & Drop or Choose file
            </p>
          </div>
        </div>
        <div className="text-center mt-[60px]">
          <button className="bg-[#545AF2] px-[57px] py-[16px] rounded-[10px] mb-[20px]">
            <p className="font-[Poppins]  text-[white] text-[16px]">
              Apply Now
            </p>
          </button>
        </div>
      </div>
      <div className="bg-[#545AF2] opacity-[0.5] text-center rounded-[10px] pt-[20px] py-[15px] mt-[20px]">
        <button className="px-[25px] py-[13px] bg-[white] rounded-[10px]">
          <div className="relative bg-[#545AF2] w-[26px] h-[26px] rounded-[99px] mx-auto">
            <Image
              className="absolute top-[7px] right-[7px]"
              alt="pluse"
              src="/svg/pluse.svg"
              width="11"
              height="11"
            />
          </div>
          Create Resume
        </button>
      </div>
    </div>
  );
};

export default Middle;
