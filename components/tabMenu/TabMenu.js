import TabIcon from "../tabIcon/TabIcon";

const TabMenu = () => {
  return (
    <div className="flex bg-[white] ml-[82px]">
      <TabIcon imgName="dashboard" name="Feed" />
      <TabIcon imgName="friends" name="My Networks" />
      <TabIcon imgName="Group" name="Dating" />
      <TabIcon imgName="marketplace" name="Marketplace" />
      <TabIcon imgName="portfolio" name="Jobs" />
      <TabIcon imgName="calendar" name="Events" />
    </div>
  );
};

export default TabMenu;
