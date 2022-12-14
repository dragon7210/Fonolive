import Image from "next/image";
import Selector from "../../../components/selector";
import RangeSlider from "react-range-slider-input";
import { DateRange } from "react-date-range";
import { useState } from "react";

import "react-range-slider-input/dist/style.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Left = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <>
      <div className="ml-[41px]">
        <p className="mt-[39px] text-[22px] font-[Poppins] font-[500]">
          Filters
        </p>
        <p className="mt-[26px] text-[16px] font-[Poppins]">Location</p>
        <div className="relative flex">
          <input
            className="w-[290px] px-[20px] py-[14px] rounded-[99px] mt-[18px]"
            placeholder="Enter Location"
          />
          <Image
            className="absolute top-[33px] right-[15px]"
            src="/svg/position.svg"
            alt="me"
            width="14"
            height="20"
          />
        </div>
        <p className="font-[Poppins] text-[16px] mt-[40px] mb-[21px]">
          Nearby Areas
        </p>
        <Selector name="Wallstreet" />
        <Selector name="Times Sqaure" />
        <Selector name="Eiffel tower" />
        <p className="font-[Poppins] text-[16px]">Price Range</p>
        <p className="mt-[25px] range-value font-[Poppins] text-[16px] font-[600] mb-[22px]">
          $500-$10,200
        </p>
        <div className="custom-slider">
          <RangeSlider />
        </div>
        <div className="relative">
          <p className="mt-[40px] font-[Poppins] text-[16px] mb-[25px]">Date</p>
          <div className="w-[270px] h-[260px]">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              showDateDisplay={false}
              rangeColors={["#545AF2"]}
              className="scale-90 absolute top-4 -left-7"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
