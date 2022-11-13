import Layout from "../../../components/Layout";

import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";

const List = () => {
  return (
    <Layout
      leftContent={<Left />}
      centerContent={<Middle />}
      rightContent={<Right />}
    />
  );
};

export default List;
