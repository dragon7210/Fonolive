import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <p className="logo header-left">Fonolive</p>
        <div className="img header-center">
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
          <Image
            className="oval"
            src="/image/oval.png"
            alt="me"
            width="46"
            height="46"
          />
        </div>
        <div className="header-right">
          <div className="search">
            <input placeholder="are you in search of something?" />
            <Image
              className="searchImg"
              src="/svg/search.svg"
              alt="search"
              width="20"
              height="20"
            />
          </div>
          <div className="ring">
            <Image
              className="searchImg"
              src="/svg/Notification.svg"
              alt="search"
              width="20"
              height="26"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
