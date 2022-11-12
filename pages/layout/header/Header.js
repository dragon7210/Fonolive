import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <p className="logo">Fonolive</p>
      <div className="img">
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
        <Image
          className="oval"
          src="/image/oval.png"
          alt="me"
          width="52"
          height="52"
        />
      </div>
      <div className="search">
        <input placeholder="are you in search of something?" />
        <Image
          className="searchImg"
          src="/image/search.png"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <div className="ring">
        <Image
          className="searchImg"
          src="/image/Shape.png"
          alt="search"
          width="20"
          height="26"
        />
      </div>
    </div>
  );
};

export default Header;
