import AccountToggle from "@components/Sidebar/AccountToggle";
import RouteSelect from "@components/Sidebar/RouteSelect";
import Search from "@components/Sidebar/Search";
import Plan from "@components/Sidebar/Plan";

const Sidebar = () => {
  return (
    <main>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      <Plan />
    </main>
  );
};

export default Sidebar;
