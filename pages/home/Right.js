import Friend from "../../components/friend";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const Right = () => {
  return (
    <div className="ml-[30px] mt-[40px]">
      <p className="mb-[13px] text-[16px] font-[Poppins]">Friends</p>
      <div className="bg-[white] p-[20px] ">
        {data.map((ele, index) => {
          return <Friend key={index} />;
        })}
      </div>
    </div>
  );
};

export default Right;
