"use client";

import { FiSearch } from "react-icons/fi";
import CommandMenu from "@components/Sidebar/CommandMenu";
import { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-4 flex items-center rounded-md bg-stone-200 px-4 py-2 text-sm">
      <FiSearch className="text-md mr-2 text-stone-500" />
      <input
        type="text"
        onFocus={(e) => {
          e.target.blur();
          setOpen(true);
        }}
        placeholder="Search"
        className="w-full bg-transparent focus:outline-none"
      />
      <span className="rounded-md bg-white px-1">⌘K</span>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Search;
