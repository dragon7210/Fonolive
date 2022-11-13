import Image from "next/image";

const TabIcon = ({ imgName, name }) => {
  return (
    <div className="w-[108px] h-[77px]">
      <Image src={`/svg/${imgName}`} alt="me" width="46" height="46" />
      <p className="tabIcon-name">{name}</p>
    </div>
  );
};

export default TabIcon;
