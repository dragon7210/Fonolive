import TabMenu from "../../../components/tabMenu/TabMenu";

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
        <div className="text-center">
          <button className="bg-[#545AF2] px-[57px] py-[16px] rounded-[10px] mb-[20px]">
            <p className="font-[Poppins] text-[white] text-[16px]">Apply Now</p>
          </button>
        </div>
      </div>
      <div className="bg-[#545AF2] opacity-[0.5] text-center rounded-[10px]pt-[20px] py-[15px]">
        <button className="px-[25px] py-[13px] bg-[white] rounded-[10px]">
          Create Resume
        </button>
      </div>
    </div>
  );
};

export default Middle;
