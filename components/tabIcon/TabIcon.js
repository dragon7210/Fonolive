import Image from "next/image";

const TabIcon = ({ imgName, name }) => {
  return (
    <div className="w-[108px] text-center pb-[12px] pt-[21px] cursor-pointer hover:bg-[#545AF2]">
      <Image
        className="m-auto "
        src={`/svg/${imgName}`}
        alt="me"
        width="28"
        height="28"
      />
      <p className="tabIcon-name">{name}</p>
    </div>
  );
};

export default TabIcon;
