import Image from "next/image";
import JobTypeSelector from "../../../components/jobTypeSelector/JobTypeSelector";

const Left = () => {
  return (
    <>
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
        <JobTypeSelector name="Full-time" />
        <JobTypeSelector name="Part-time" />
        <JobTypeSelector name="Contractual" />
        <JobTypeSelector name="Hourly" />
        <JobTypeSelector name="Intership" />
      </div>
    </>
  );
};

export default Left;
