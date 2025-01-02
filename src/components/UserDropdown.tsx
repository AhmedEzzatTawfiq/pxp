"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CircleUser } from "lucide-react";
import { handleSignOut } from "./ServerAction";
import { FaSignOutAlt } from "react-icons/fa";

interface UserDropdownProps {
  userImage?: string | null; // Optional user image
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userImage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownVisible]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Avatar Button */}
      <button
        onClick={toggleDropdown}
        className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300 hover:border-blue-500"
      >
        {userImage ? (
          <Image
            src={userImage}
            alt="User Avatar"
            layout="fill"
            className="object-cover"
          />
        ) : (
          <CircleUser className="w-full h-full text-gray-400" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-lg">
          <div className="py-2">
            {/* User Info */}
            <div className="flex items-center justify-center gap-2 border-b border-gray-100 z-50">
              <Link href="/dashboard" className="flex gap-5 hover:bg-blue-50 rounded-md px-2 py-1">
                <div className="w-10 h-10 rounded-full overflow-hidden border">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <CircleUser className="w-full h-full text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold">Welcome</p>
                  <p className="text-xs text-gray-500">Your Account</p>
                </div>
              </Link>
            </div>


            {/* Sign Out Button */}
            <form action={handleSignOut} className="px-4 py-2">
              <button
                type="submit"
                className="flex text-center items-center justify-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded"
              >
                Sign Out
                <FaSignOutAlt />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
