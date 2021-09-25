import { VFC, Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { User } from "../../types/User";
import Link from "next/link";
import Image from "next/image";
import { Logout } from "../../libs/firebase";
import { CurrentUserContext } from "../../context/CurrentUserContext";

type Props = {
  currentUser: User;
};

export const UserMenu: VFC<Props> = ({ currentUser }) => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    Logout();
    setCurrentUser(null);
    alert("logoutしました");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <img
          src={currentUser.profile_image}
          alt={"profile_imgae"}
          className="rounded-full object-cover w-10 h-10"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-3">
          <Menu.Item>
            {({ active }) => (
              <Link href={`/user/${currentUser.uid}`}>
                <a
                  className={`${"text-gray-900"} text-left  w-full rounded-md  block px-2 py-2 text-md hover:bg-blue-400 hover:text-white`}
                >
                  プロフィール
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href={`/roadmap/new`}>
                <a
                  className={`${"text-gray-900"} text-left  w-full rounded-md  block px-2 py-2 text-md hover:bg-blue-400 hover:text-white`}
                >
                  ロードマップを作成する
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${"text-gray-900"} text-left w-full rounded-md  block px-2 py-2 text-md hover:bg-blue-400 hover:text-white`}
                onClick={handleLogout}
              >
                ログアウト
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
