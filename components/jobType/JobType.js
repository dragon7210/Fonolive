import Image from "next/image";
import { useRouter } from "next/router";

const JobType = ({ index }) => {
  const router = useRouter();
  const selJobDetail = () => {
    router.push("/jobs/detail");
  };
  const onClick = () => {};
  return (
    <div className="jobType1" onClick={selJobDetail}>
      <div className="people">
        <Image
          src="/svg/people.svg"
          className="Group"
          alt="Group"
          width={35}
          height={38}
        />
      </div>
      <div className="right">
        <div className="title">
          <p className="job-title">UI/UX Designer/Frontend Engineer</p>
          <p className="job-type">Full-time</p>
        </div>
        <p className="content">
          Creative Thoughts Informatics in Indore, MP, INDIA
        </p>
        <div className="apply">
          <p className="date">2 days ago</p>
          <p className="state">Apply this job</p>
        </div>
      </div>
    </div>
  );
};

export default JobType;
