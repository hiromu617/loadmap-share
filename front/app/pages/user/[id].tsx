import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import { CurrentUserContext } from "../../src/context/CurrentUserContext";
import router from "next/router";
import axios from "../../src/libs/axios"
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// TODO: profile
const UserId: NextPage = () => {
  const { id } = router.query;
  const { data: user, error } = useSWR(`/api/v1/user/${id}`, fetcher);

  //この変数でタブ切り替え
  const [openProfile, setOpenProfile] = useState(true);
  const [openRoadMap, setOpenRoadMap] = useState(false);
  const toggleProfile = () => {
    setOpenProfile((prevState) => true);
    setOpenRoadMap((prevState) => false);
  };
  const toggleRoadMap = () => {
    setOpenProfile((prevState) => false);
    setOpenRoadMap((prevState) => true);
  };

  const { currentUser, loading } = useContext(CurrentUserContext);

  const focused =
    "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500";
  const outOfFocus =
    "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none";
  const profileStyle = openProfile ? focused : outOfFocus;
  const roadMapStyle = openRoadMap ? focused : outOfFocus;

  if (!user) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>An error occured</h1>;
  }

  return (
    <div className="w-full min-h-screen dark:bg-gray-800">
      <div className="container mx-auto px-2 xl:px-32 pt-5 h-full">
        <div className="flex bottom-auto">
          <div className="flex items-end text-4xl p-2 text-indigo-400">
            Profile
          </div>
          <div className="flex items-end p-2 text-gray-600">プロフィール</div>
        </div>
        <div className="border-solid border-2 rounded-md p-10">
          <div className="flex relative bottom-0 left-10">
            <img
              src={user.profile_image}
              alt={"profile_imgae"}
              className="rounded-full object-cover w-22 h-22 flex items-center m-5"
            />
            <div className="flex-col">
              <div className="flex items-center text-gray-600 text-3xl m-5">
                {user.name}
              </div>
              <div className="flex gap-3">
                <Image
                  className="flex items-center"
                  src="/images/twitter_icon.png"
                  width={30}
                  height={30}
                />
                <Image
                  className="flex items-center"
                  src="/images/github_icon.png"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="bg-white">
            <nav className="flex flex-col sm:flex-row justify-center">
              <button className={profileStyle} onClick={toggleProfile}>
                プロフィール
              </button>
              <button className={roadMapStyle} onClick={toggleRoadMap}>
                気に入ったロードマップ
              </button>
            </nav>
          </div>
          <div className="m-10">
            <div className="m-5">
              <div className="text-2xl underline text-gray-600">自己紹介</div>
              <div className="text-gray-600">
                {user.bio}
              </div>
            </div>
            <div className="m-5">
              <div className="text-2xl underline text-gray-600">
                ポートフォリオ
              </div>
              <div className="text-gray-600">github.com</div>
            </div>
            <div className="m-5">
              <div className="text-2xl underline text-gray-600">
                ロードマップ
              </div>
              <div className="text-gray-600">ここにロードマップを取得</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserId;
