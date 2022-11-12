import Image from "next/image";
import TabMenu from "../tabMenu/TabMenu";

import JobType from "../jobType";
const data1 = [0, 1, 2, 3, 4];
const data2 = [0, 1];

const Middle = () => {
  return (
    <div className="middle">
      <TabMenu />
      <div className="jobTitle">
        <input className="jobInput" placeholder="Job title or Keyword" />
        <Image
          className="searchImg"
          src="/svg/search.svg"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <div className="middle-3">
        <p className="recommend"> Recommended jobs for you</p>
        <button>
          <p className="newJob">Create new job</p>
          <Image src="/svg/pluse.svg" width={10} height={10} alt="pluse" />
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
