import Image from "next/image";
import { useRouter } from "next/router";

const JobType = ({ index }) => {
  const router = useRouter();
  const selJobDetail = () => {
    router.push("/jobs/detail");
  };
  return (
    <div
      className="flex bg-[white] p-[18px] mt-[16px] mb-[20px] cursor-pointer"
      onClick={selJobDetail}
    >
      <div className="bg-[#545AF2] p-[19px] mr-[15px]">
        <Image
          src="/svg/people.svg"
          className="Group"
          alt="Group"
          width={35}
          height={38}
        />
      </div>
      <div>
        <div className="flex w-[514px] relative">
          <p className="font-[Poppins] text-[16px] font-[500]">
            UI/UX Designer/Frontend Engineer
          </p>
          <p className="font-[Poppins] text-[14px] absolute right-0">
            Full-time
          </p>
        </div>
        <p className="font-[Poppins] text-[14px]">
          Creative Thoughts Informatics in Indore, MP, INDIA
        </p>
        <div className="flex relative">
          <p className="font-[Poppins] text-[14px]">2 days ago</p>
          <p className="font-[Poppins] text-[14px] absolute right-0">
            Apply this job
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobType;
