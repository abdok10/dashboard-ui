import Link from "next/link";
import { GrTransaction } from "react-icons/gr";
import { IoCard, IoStatsChart } from "react-icons/io5";
import { RiHome3Fill } from "react-icons/ri";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: RiHome3Fill },
  { name: "Accounts", href: "/accounts", icon: IoStatsChart },
  { name: "Cards", href: "/Cards", icon: IoCard },
  { name: "transaction", href: "/transaction", icon: GrTransaction },
  { name: "integrations", href: "/integrations", icon: IoCard },
  { name: "payees", href: "/payees", icon: IoCard },
  { name: "invoices", href: "/invoices", icon: IoCard },
];

const RouteSelect = () => {
  return (
    <main className="space-y-2 text-stone-500">
      {navigation.map((nav) => (
        <Link
          href={`/app/${nav.href}`}
          key={nav.name}
          className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white hover:font-normal hover:text-stone-700"
        >
          {<nav.icon />}
          <span>{nav.name}</span>
        </Link>
      ))}
    </main>
  );
};

export default RouteSelect;
