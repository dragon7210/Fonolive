import Image from "next/image";
import SelPeople from "../selPeople";

const Right = () => {
  return (
    <div className="right">
      <Image
        src="/svg/Groupe.svg"
        width={30}
        alt="groupe"
        height={30}
        style={{ marginTop: "29px" }}
      />
      <p className="suggesstion">Suggestions</p>
      <SelPeople name="Robert.D" />
      <SelPeople name="Robert.D" />
      <SelPeople name="Robert.D" />
      <SelPeople name="Robert.D" />
      <SelPeople name="Robert.D" />
      <div className="rect"></div>
    </div>
  );
};

export default Right;
