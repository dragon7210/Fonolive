import Layout from "../../../components/Layout";
import Middle from "./Middle";
import Left from "./Left";
import Right from "./Right";

const Profile = () => {
  return (
    <Layout
      leftContent={<Left />}
      centerContent={<Middle />}
      rightContent={<Right />}
    />
  );
};

export default Profile;
