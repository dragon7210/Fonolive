import Image from "next/image";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import JobTypeSelector from "../../../components/jobTypeSelector/JobTypeSelector";

const Filters = () => {
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
      <JobTypeSelector name="Wallstreet" />
      <JobTypeSelector name="Times Square" />
      <JobTypeSelector name="Eiffel Tower" />
      <h6>Price Range</h6>
      <p className="range-value">$500-$10,200</p>

      <RangeSlider />

      <h6>Date</h6>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </div>
  );
};

export default Filters;
