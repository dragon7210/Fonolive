import Header from "../../components/Layout/Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

const index = ({ leftContent, centerContent, rightContent }) => {
  return (
    <>
      <div class="main-container">
        <div class="header-content">
          <Header />
        </div>
        <div class="top-content">
          <Navigation />
        </div>
        <div class="left-content">{leftContent}</div>
        <div class="main-content">{centerContent}</div>
        <div class="right-content">{rightContent}</div>
      </div>
      <Footer />
    </>
  );
};

export default index;
