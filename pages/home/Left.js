import SelPeople from "../../components/selPeople";

const data = [0, 1, 2, 3, 4];

const Left = () => {
  return (
    <div className="mt-[40px] ml-[30px]">
      <p className="mb-[21px] font-[Poppins] text-[16px]">Suggestions</p>
      <div className="bg-[white] px-[14px] py-[16px]">
        {data.map((ele, index) => {
          return <SelPeople name="Robert D" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Left;
