import Image from "next/image";
import Selector from "../../../components/selector";
import TabIcon from "../../../components/tabIcon/TabIcon";
import JobDescription from "../../../components/jobDescription/JobDescription";

const List = () => {
  return (
    <div className="list">
      <div className="left">
        <div className="avatar">
          <div>
            <Image
              className="oval"
              src="/image/oval.png"
              alt="me"
              width="48"
              height="48"
            />
          </div>
          <div className="letter">
            <p className="letter1"> Rose Satterfield</p>
            <p className="letter2">@rozetka_1993</p>
          </div>
        </div>
        <p className="filters">Filters</p>
        <p className="location">Location</p>
        <div className="enter">
          <input className="enterLocation" placeholder="Enter Location" />
          <Image
            className="vector"
            src="/image/Vector.png"
            alt="me"
            width="14"
            height="20"
          />
        </div>
        <p className="jobType">Job Type</p>
        <Selector name="Full-time" />
        <Selector name="Part-time" />
        <Selector name="Contractual" />
        <Selector name="Hourly" />
        <Selector name="Intership" />
      </div>
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
        <div className="middle-3">
          <p className="recommend"> All jobs</p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default List;
