"use client";
import { navBarList } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import OutsideClickHandler from 'react-outside-click-handler';

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false); // Close the dropdown when clicking outside
      }}
    >
      <div className="relative">
        {/* Menu Icon */}
        <HiMenuAlt2
          onClick={() => setOpen(!open)} // Toggle the dropdown
          className="inline-flex md:hidden cursor-pointer text-3xl text-white hover:text-blue-600 transition-all"
        />

        {/* Dropdown Menu */}
        <div
          className={`w-screen felx flex-col items-center bg-black shadow-lg py-4 px-4 absolute -left-4 top-11 rounded-lg transition-all duration-300 ease-in-out transform ${
            open
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-4 text-gray-800 ">
            {navBarList?.map((item) => (
              <Link
                className="text-center font-medium text-white hover:bg-white/20  py-2 px-3 rounded-md transition-all"
                key={item?.title}
                href={item.link}
              >
                {item?.title}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default DropDown;
