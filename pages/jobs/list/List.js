import Left from "../../../components/left";
import Middle from "../../../components/middle";
import Right from "../../../components/right";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

const List = () => {
  return (
    <>
      <Header />
      <div className="list">
        <Left />
        <Middle />
        <Right />
      </div>
      <Footer />
    </>
  );
};

export default List;
