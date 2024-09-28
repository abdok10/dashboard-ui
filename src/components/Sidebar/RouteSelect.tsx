"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GrTransaction } from "react-icons/gr";
import { IoCard, IoStatsChart } from "react-icons/io5";
import { RiHome3Fill } from "react-icons/ri";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: RiHome3Fill },
  { name: "Accounts", href: "/accounts", icon: IoStatsChart },
  { name: "Cards", href: "/cards", icon: IoCard },
  { name: "transaction", href: "/transaction", icon: GrTransaction },
  { name: "integrations", href: "/integrations", icon: IoCard },
  { name: "payees", href: "/payees", icon: IoCard },
  { name: "invoices", href: "/invoices", icon: IoCard },
];

const RouteSelect = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <main className="space-y-2 text-stone-500">
      {navigation.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className={`${pathname == nav.href ? "bg-white text-stone-800" : "hover:bg-stone-200 hover:font-normal hover:text-stone-700"} transition-all flex items-center gap-2  w-full rounded-md px-2 py-1`}
        >
          {<nav.icon />}
          <span>{nav.name}</span>
        </Link>
      ))}
    </main>
  );
};

export default RouteSelect;
