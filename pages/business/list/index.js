import Layout from "../../../components/Layout/index";
import Business from "./Business";
import Filters from "./Filters";
import Suggestions from "./Suggestions";

const index = () => {
  return (
    <div>
      <Layout
        leftContent={<Filters />}
        centerContent={<Business />}
        rightContent={<Suggestions />}
      />
    </div>
  );
};

export default index;
