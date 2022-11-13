import Layout from "../../../components/Layout";
import Left from "./Left";
import Right from "./Right";
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
