"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { RiHome3Fill } from "react-icons/ri"
import {
  FiDollarSign,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: RiHome3Fill },
  { name: "Team", href: "/team", icon: FiUsers },
  { name: "Integrations", href: "/integrations", icon: FiPaperclip },
  { name: "Invoices", href: "/invoices", icon: FiLink },
  { name: "Finance", href: "/finance", icon: FiDollarSign },
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
