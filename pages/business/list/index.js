import Layout from "../../../components/Layout/Layout";
import Business from "./Business";
import Filters from "./Filters";
import Right from "../../jobs/detail/Right";

const index = () => {
  return (
    <div>
      <Layout
        leftContent={<Filters />}
        centerContent={<Business />}
        rightContent={<Right />}
      />
    </div>
  );
};

export default index;
