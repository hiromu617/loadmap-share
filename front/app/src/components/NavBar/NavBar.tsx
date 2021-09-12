import { VFC, useContext } from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import { LoginModalContext } from "../../context/LoginModalContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export const NavBar: VFC = () => {
  const { setIsOpen } = useContext(LoginModalContext);
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser)
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 z-40 h-16">
      <div className="flex justify-between h-full px-3 md:px-10 items-center border-b-2 border-gray-100 dark:border-gray-700">
        <div className="flex justify-between gap-5 md:gap-10 items-center">
          <Link href="/">
            <h1 className="tracking-tighter text-xl font-medium text-gray-700 dark:text-gray-300">
              RoadMap
            </h1>
          </Link>
          <button
            className="flex items-center gap-2"
            type="button"
            onClick={() => alert("open search modal")}
          >
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <p className="text-gray-400">Search</p>
          </button>
        </div>
        {currentUser ? (
          <Link href="/user/1">
            <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
          </Link>
        ) : (
          <button onClick={() => setIsOpen(true)}>LOGIN</button>
        )}
      </div>
    </div>
  );
};
