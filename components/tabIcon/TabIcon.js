import Image from "next/image";

const TabIcon = ({ imgName, name }) => {
  return (
    <div className="tabIcon">
      <Image
        className="oval"
        src={`/svg/${imgName}`}
        alt="me"
        width="46"
        height="46"
      />
      <p className="tabIcon-name">{name}</p>
    </div>
  );
};

export default TabIcon;
