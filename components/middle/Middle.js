import Image from "next/image";

import TabIcon from "../tabIcon/TabIcon";
import JobType from "../jobType";

const Middle = () => {
  return (
    <div className="middle">
      <div className="tabMenu">
        <TabIcon imgName="dashboard.svg" name="Feed" />
        <TabIcon imgName="friends.svg" name="My Networks" />
        <TabIcon imgName="Group.svg" name="Dating" />
        <TabIcon imgName="marketplace.svg" name="Marketplace" />
        <TabIcon imgName="portfolio.svg" name="Jobs" />
        <TabIcon imgName="calendar.svg" name="Events" />
      </div>
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
      <JobType />
      <JobType />
      <JobType />
      <JobType />
      <JobType />
      <div className="middle-3">
        <p className="recommend"> All jobs</p>
      </div>
      <JobType />
      <JobType />
    </div>
  );
};

export default Middle;
