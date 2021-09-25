import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Img from "../public/sample-profile-image.jpg"
import styles from "../styles/Home.module.css";

// TODO: roadmap一覧
const Home: NextPage = () => {
  var roadMapList = new Array();
  roadMapList.push(0);
  roadMapList.push(1);
  roadMapList.push(2);
  roadMapList.push(3);
  roadMapList.push(4);
  roadMapList.push(5);
  roadMapList.push(6);

  return (
    <div className="w-full h-full bg-blue-50">
      <div className="w-full h-96">
        <h1 className="text-white text-7xl absolute top-52 text-center w-full z-10">Road For Tomorrow</h1>
        <h2 className="text-white text-3xl absolute top-96 text-center w-full z-10">未来に続く道を探せ</h2>
        <Image src={Img}/>
      </div>
      <div className="w-5/6 bg-white rounded-t-3xl py-16 px-14 mx-auto relative top-20 z-10">
        <div className="flex bottom-auto">
          <div className="flex items-end text-4xl p-2 text-indigo-400">
            Gallery
          </div>
          <div className="flex items-end p-2 text-gray-600">ロードマップ一覧</div>
        </div>
        <div className="border-solid flex flex-wrap content-center">
          {roadMapList.map((id) => (
            <Link key={id} href={`/roadmap/${id}`}>
              <div className="w-1/3">
                <div className="bg-white shadow-lg rounded-md mb-10 m-5 p-5">
                  <div className="font-bold text-gray-600">
                    Unity実践入門～環境構築から
                  </div>
                  <div className="m-2 text-gray-600 ">
                    Unityの環境構築から2D/3Dゲームの実装をするところ
                    までのロードマップを提示しています。
                  </div>
                  <div className="flex right-0">
                    <div className="flex items text-gray-600 ">アイコン</div>
                    <div className="flex items text-gray-600 ">作成者</div>
                    <div className="flex items">
                      <div>
                        <div className="text-gray-600 ">120</div>
                        <div className="text-gray-600 ">2021.09.21</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
