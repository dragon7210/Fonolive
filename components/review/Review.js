import Image from "next/image";

const data = [0, 1, 2, 3, 4];

const Review = () => {
  return (
    <div className="border-b-2 mt-[5px] border-[#D9D9D9]">
      <div className="flex justify-between">
        <p>Rovert K</p>
        <div className="flex">
          {data.map((ele, index) => {
            return (
              <Image
                className="mr-[7px]"
                key={index}
                src="/svg/star.svg"
                alt="star"
                width={12}
                height={12}
              />
            );
          })}
        </div>
      </div>
      <p className="mt-[5px] font-[Poppins] text-[12px] pb-[11px]">
        Wonderfull people with quality of work!! Must Hire
      </p>
    </div>
  );
};

export default Review;
