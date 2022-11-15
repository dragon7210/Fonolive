import Header from "./Header";
import Left from "./Left";
import Middle from "./Middle";

const Product = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#E5E5E5]">
      <Header />
      <div className="flex">
        <Left />
        <Middle />
      </div>
    </div>
  );
};

export default Product;
