import Image from "next/image";
import Checkbox from "../../../components/UI/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file

const Filters = () => {
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);

  return (
    <div className="filters-container">
      <h4>Filters</h4>
      <h6>Location</h6>
      <div className="location-input">
        <input placeholder="Enter Location" className="location-input" />
        <Image
          className="location-img"
          src="/svg/location.svg"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <h6>Nearby Areas</h6>
      <Checkbox label="Wallstreet" />
      <Checkbox label="Times Square" />
      <Checkbox label="Eiffel Tower" />
      <h6>Price Range</h6>
      <p className="range-value">$500-$10,200</p>
      {/* refer https://www.npmjs.com/package/react-range-slider-input */}
      <RangeSlider />

      <h6>Date</h6>
      {/*refer https://www.npmjs.com/package/react-date-range  */}
      {/* <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={["#545AF2"]}
      /> */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </div>
  );
};

export default Filters;
