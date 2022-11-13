import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ leftContent, centerContent, rightContent }) => {
  return (
    <>
      <div className="max-w-[1350px] m-auto  bg-[#ececec]">
        <Header />
        <div className="flex">
          {leftContent}
          {centerContent}
          {rightContent}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
