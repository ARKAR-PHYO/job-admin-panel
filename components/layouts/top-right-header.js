import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, PencilAltIcon } from "@heroicons/react/outline";
import UserDropdown from "../user/user-dropdown";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const TopRightHeader = (props) => {
  const imageLink = `https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`;
  return (
    <div className="flex items-center justify-between h-16 bg-gray-300 px-6">
      <MenuIcon className="w-5" />
      <UserDropdown />
    </div>
  );
};

export default TopRightHeader;
