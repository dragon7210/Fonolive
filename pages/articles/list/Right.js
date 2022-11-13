import Image from "next/image";
import SelPeople from "../../../components/selPeople/SelPeople";

const data = [0, 1, 2, 3, 4];
const Right = () => {
  return (
    <div className="ml-[29px] mt-[17px]">
      <Image
        src="/svg/Groupe.svg"
        width={30}
        alt="groupe"
        height={30}
        style={{ marginTop: "29px" }}
      />
      <p className="mt-[66px] font-[Poppins] text-[16px] mb-[21px]">
        Suggestions
      </p>
      <div className="bg-[white] px-[17px] pt-[17px]">
        {data.map((ele, index) => {
          return <SelPeople key={index} name="Robert.D" />;
        })}
      </div>

      <div className="bg-[#CCCCCC] w-[294px] h-[294px] mt-[34px]"></div>
    </div>
  );
};

export default Right;
