import Image from "next/image";
import { useState } from "react";

const JobTypeSelector = ({ name }) => {
  const [onSel, setOnSel] = useState(false);
  return (
    <>
      <div className="jobCheck">
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
            className="checkFalse"
            onClick={() => {
              onSel ? setOnSel(false) : setOnSel(true);
            }}
          ></div>
        )}

        <p className="job">{name}</p>
      </div>
    </>
  );
};

export default JobTypeSelector;
