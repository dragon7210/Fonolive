import Image from "next/image";
import { useState } from "react";

const Selector = ({ name }) => {
  const [onSel, setOnSel] = useState(false);
  return (
    <>
      <div className="flex mb-[21px] cursor-pointer">
        {onSel ? (
          <div>
            <Image
              className="checkTrue"
              src="/image/shape.png"
              alt="me"
              width="27"
              height="27"
              onClick={() => {
                onSel ? setOnSel(false) : setOnSel(true);
              }}
            />
          </div>
        ) : (
          <div
            className="border-[2px] w-[25px] h-[25px] rounded-[5px] border-[#1F41F7]"
            onClick={() => {
              onSel ? setOnSel(false) : setOnSel(true);
            }}
          ></div>
        )}

        <p className="ml-[15px] font-[Poppins] text-[149x]">{name}</p>
      </div>
    </>
  );
};

export default Selector;
