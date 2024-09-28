"use client";

import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FiEye, FiLogOut, FiPlus } from "react-icons/fi";
import { SiHomepage } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { IoCard, IoStatsChart } from "react-icons/io5";
import { RiHome3Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", icon: SiHomepage },
  { name: "Dashboard", href: "/dashboard", icon: RiHome3Fill },
  { name: "Accounts", href: "/accounts", icon: IoStatsChart },
  { name: "Cards", href: "/cards", icon: IoCard },
  { name: "transaction", href: "/transaction", icon: GrTransaction },
  { name: "integrations", href: "/integrations", icon: IoCard },
  { name: "payees", href: "/payees", icon: IoCard },

  { name: "invoices", href: "/invoices", icon: IoCard },
];

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <Command.Dialog
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto mt-12 max-w-lg rounded-lg border border-stone-300 bg-white shadow-md"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          className="w-full rounded-lg px-4 py-2 outline-none"
          placeholder="Type a command or Search..."
        />
        <hr className="px-0" />
        <Command.List className="mt-1 px-4 py-1">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">{value}</span>
          </Command.Empty>

          <Command.Group heading="Team" className="mb-3 text-sm text-stone-400">
            <Command.Item
              className="flex cursor-pointer items-center gap-2 rounded p-2 text-sm text-stone-950 transition-colors hover:bg-stone-200"
              tabIndex={0} // Make the item focusable
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Handle the Enter key
                }
              }}
            >
              <FiPlus />
              Invite Member
            </Command.Item>
            <Command.Item
              className="flex cursor-pointer items-center gap-2 rounded p-2 text-sm text-stone-950 transition-colors hover:bg-stone-200"
              tabIndex={0}
            >
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Pages"
            className="mb-3 text-sm text-stone-400"
          >
            {navigation.map((nav) => (
              <Command.Item
                key={nav.name}
                tabIndex={0}
                className="flex cursor-pointer items-center gap-2 rounded p-2 text-sm text-stone-950 transition-colors hover:bg-stone-200"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setOpen(false);
                    router.push(nav.href);
                  }
                }}
                onClick={() => setOpen(false)}
              >
                {<nav.icon />}
                {nav.name}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Item
            className="my-2 flex cursor-pointer items-center gap-2 rounded-md bg-stone-900 px-2 py-1 text-stone-50 hover:bg-stone-950 "
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("*****Signed Out*****");
              }
            }}
          >
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
