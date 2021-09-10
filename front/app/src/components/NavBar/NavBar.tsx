import { VFC } from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

export const NavBar: VFC = () => {
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 z-50 h-16">
      <div className="flex justify-between h-full px-3 md:px-10 items-center border-b-2 border-gray-100 dark:border-gray-700">
        <div className="flex justify-between gap-5 md:gap-10 items-center">
          <Link href="/">
            <h1 className="tracking-tighter text-xl font-medium text-gray-700 dark:text-gray-300">
              RoadMap
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <p className="text-gray-400">Search</p>
          </div>
        </div>
        <Link href="/user/1">
          <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
        </Link>
      </div>
    </div>
  );
};
