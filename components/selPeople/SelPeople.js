import Image from "next/image";

const SelPeople = ({ name }) => {
  return (
    <div className="selPeople">
      <Image src="/image/Oval.png" width={30} height={30} alt="people" />
      <p className="name">{name}</p>
      <button className="follow">
        <p className="follow-text">Follow</p>
      </button>
    </div>
  );
};

export default SelPeople;
