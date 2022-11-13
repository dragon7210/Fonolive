import Image from "next/image";
import TabMenu from "../../../components/tabMenu/TabMenu";

import JobType from "../../../components/jobType";
const data1 = [0, 1, 2, 3, 4];
const data2 = [0, 1];

const Middle = () => {
  return (
    <div className="ml-[20px]">
      <TabMenu />
      <div className="flex relative">
        <input
          className="w-[650px] mt-[29px] py-[14px] pl-[20px] font-[Poppins] text-[16px]"
          placeholder="Job title or Keyword"
        />
        <Image
          className="absolute right-[20px] top-[45px]"
          src="/svg/search.svg"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <div className="flex relative">
        <p className="mt-[42px] font-[Poppins] text-[20px] teext-[500]">
          Recommended jobs for you
        </p>
        <button className="bg-[#545AF2] p-[13px] relative flex mt-[38px] rounded-[99px] w-[164px] ml-[209px]">
          <p className="text-[white] m-0 text-[12px] font-[Poppins] ">
            Create new job
          </p>
          <Image
            className="absolute right-[13px] top-[16px]"
            src="/svg/pluse.svg"
            width={10}
            height={10}
            alt="pluse"
          />
        </button>
      </div>
      {data1.map((ele, index) => {
        return <JobType key={index} index={index} />;
      })}
      <div className="middle-3">
        <p className="recommend"> All jobs</p>
      </div>
      {data2.map((ele, index) => {
        return <JobType key={index} />;
      })}
    </div>
  );
};

export default Middle;
