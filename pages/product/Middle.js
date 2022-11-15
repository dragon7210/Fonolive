import Image from "next/image";
import ProductList from "../../components/productList";
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Middle = () => {
  return (
    <div className="ml-[24px] mt-[40px]">
      <div className="relative flex">
        <input
          placeholder="Search"
          className="w-[912px] px-[51px] py-[11px] rounded-[6px] font-[Poppins] text-[16px]"
        />
        <Image
          className="absolute top-[15px] left-[19px]"
          src="/svg/search.svg"
          alt="search"
          width={18}
          height={19}
        />
        <div className="ml-[24px] bg-[white] w-[48px] rounded-[6px] px-[12px] py-[10px]">
          <Image src="/svg/shape2.svg" alt="svg" width={24} height={24} />
        </div>
      </div>
      <div className="mt-[24px] grid grid-cols-3 gap-6">
        {data.map((ele, index) => {
          return <ProductList key={index} />;
        })}
      </div>
    </div>
  );
};

export default Middle;
