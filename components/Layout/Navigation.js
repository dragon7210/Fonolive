import Image from "next/image";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-usercard">
        <Image src="/image/nav/user.png" width={50} height={50} alt="avatar" />
        <div>
          <p className="user-name">Rose Satterfield</p>
          <p className="user-id">@rozetka_1993</p>
        </div>
      </div>
      <div class="navigation-menu">
        <div className="nav-menu-item">
          <Image
            src="/image/nav/dashboard.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>Feed</p>
        </div>
        <div className="nav-menu-item">
          <Image
            src="/image/nav/mynetwork.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>My Network</p>
        </div>
        <div className="nav-menu-item">
          <Image
            src="/image/nav/dating.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>Dating</p>
        </div>
        <div className="nav-menu-item">
          <Image
            src="/image/nav/marketplace.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>Makretplace</p>
        </div>
        <div className="nav-menu-item">
          <Image
            src="/image/nav/jobs.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>Jobs</p>
        </div>
        <div className="nav-menu-item active">
          <Image
            src="/image/nav/events.png"
            width={25}
            height={25}
            alt="avatar"
          />
          <p>Events</p>
        </div>
      </div>
      <div class="navigation-right"></div>
    </div>
  );
};

export default Navigation;
