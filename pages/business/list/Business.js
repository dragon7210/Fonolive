import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

const BusinessItem = () => {
  return (
    <div className="business-item">
      <div className="left">
        <Image
          className="business-img"
          src="/svg/gardening.svg"
          alt="search"
          width="33"
          height="33"
        />
        <div>
          <p>Clump Gardners</p>
          <div className="rating">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      </div>
      <Image
        className="call-img"
        src="/svg/mobile.svg"
        alt="call"
        width="25"
        height="25"
      />
    </div>
  );
};

const Business = () => {
  return (
    <div>
      <div className="business-header">
        <h4>Business</h4>
        <span>
          Create Business
          <AiOutlinePlus size={18} />
        </span>
      </div>
      <div>
        {Array(10).fill(<BusinessItem />)}

        {/* <BusinessItem /> */}
      </div>
    </div>
  );
};

export default Business;
