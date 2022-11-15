import Image from "next/image";
import SelPeople from "../../../components/selPeople";

const data = [0, 1, 2, 3, 4];
const Right = () => {
  return (
    <div className="ml-[29px]">
      <p className="mt-[39px] font-[Poppins] text-[16px] mb-[21px]">
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
