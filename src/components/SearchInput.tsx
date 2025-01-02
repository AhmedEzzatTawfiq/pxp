"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="relative hidden sm:inline-flex h-12 text-base items-center gap-2 justify-between">
        <CiSearch className="text-lg absolute left-2.5 mt-.5 text-blue-600" />
        <input
          type="text"
          placeholder="Search courses..."
          className="flex-1 h-10 outline-none bg-transparent bg-white placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 sm:pr-28 pr-12 placeholder:text-sm sm:placeholder:text-md"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search && (
          <IoMdClose
            className="text-accent/50 hover:text-blue-600 hoverEffect cursor-pointer absolute right-20"
            onClick={() => setSearch("")}
          />
        )}
        <button className=" bg-blue-600 text-white px-3.5 py-1.5 mr-1.5 text-sm hover:bg-blue-700 hoverEffect font-medium absolute right-0">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
