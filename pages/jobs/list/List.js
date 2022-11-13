import Layout from "../../../components/Layout";
import Left from "../Left";
import Middle from "./Middle";
import Right from "../Right";

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
