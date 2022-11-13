import TabIcon from "../tabIcon/TabIcon";

const TabMenu = () => {
  return (
    <div className="flex bg-[white] mt-[24px]">
      <TabIcon imgName="dashboard.svg" name="Feed" />
      <TabIcon imgName="friends.svg" name="My Networks" />
      <TabIcon imgName="Group.svg" name="Dating" />
      <TabIcon imgName="marketplace.svg" name="Marketplace" />
      <TabIcon imgName="portfolio.svg" name="Jobs" />
      <TabIcon imgName="calendar.svg" name="Events" />
    </div>
  );
};

export default TabMenu;
