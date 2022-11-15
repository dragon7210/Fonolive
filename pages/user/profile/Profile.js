import Layout from "../../../components/Layout";
import Middle from "./Middle";
import Right from "./Right";

const Profile = () => {
  return (
    <Layout
      leftContent={<></>}
      centerContent={<Middle />}
      rightContent={<Right />}
    />
  );
};

export default Profile;
