import Image from "next/image";

const User = ({ name, image }) => {
  return (
    <div className="user">
      <div className="left">
        <Image
          className="call-img"
          src={image}
          alt="user"
          width="30"
          height="30"
        />
        <p>Robert D.</p>
      </div>
      <span className="follow-btn">Follow</span>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className="suggestions">
      <h4>Suggestions</h4>

      <div className="list">
        <User name="Robert D." image="/image/users/1.png" />
        <User name="Amanda S." image="/image/users/2.png" />
        <User name="Samuel J." image="/image/users/3.png" />
        <User name="Luicy P." image="/image/users/4.png" />
        <User name="Elizabeth T." image="/image/users/5.png" />
      </div>
      <div className="advertisement">Advertisement</div>
    </div>
  );
};

export default Suggestions;
