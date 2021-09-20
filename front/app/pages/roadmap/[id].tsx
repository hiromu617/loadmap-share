import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";

const data = {
  id: 1,
  name: "Unity実践入門～環境構築から",
  description: "unityに入門してから習得するまでのロードマップ",
  author: {
    uid: 1,
    name: "ryunosuke",
    bio: "ryunosukeです",
    profile_image: "sample.com",
  },
  node_items: [
    {
      id: 1,
      next_id: 2,
      loadmap_id: 1,
      name: "Unityチュートリアル",
      description: "unityチュートリアルでunityの基本を学びます",
    },
    {
      id: 2,
      next_id: 3,
      loadmap_id: 1,
      name: "Unityの教科書",
      description:
        "Unityを初めて2,3か月経過後、「Unityの教科書」をテキストにした勉強を開始しました。Unity公式チュートリアルでは環境構築を終わらせ、簡単なブロック崩しゲームをつくることでUnity特有の3Dの操作には慣れてきました。「Unityの教科書」では3Dゲームの作り方を復習するとともに、2Dゲームの作り方を勉強しました。このテキストで学んだことは以下の点です。・RigidBodyによる衝突判定 ・スクリプトによるゲームの制御・AudioSourceの使い方 ・Animationの使い方主にUnity公式チュートリアルでは詳しく説明されていなかったコンポーネントのつけ方を学べる良テキストでした。さらにこの時期に参考にした記事を追加します・RigidBodyによる衝突判定",
    },
    {
      id: 3,
      next_id: null,
      loadmap_id: 1,
      name: "独習C#",
      description: "独習C#でC#について詳しく勉強します",
    },
  ],
  like_count: 5,
  comments: [
    {
      id: 1,
      content: "",
      user: {
        id: 1,
        uid: "dsbgs",
        name: "jhon",
        bio: "",
        profile_image: "",
      },
    },
  ],
};

const RoadMapId: NextPage = () => {
  const [currentNode, setCurrentNode] = useState(data.node_items[0]);

  return (
    <div className="w-full min-h-screen flex bg-yellow-50">
      <div className="w-1/2 min-h-screen p-5">
        <div className="px-10">
          <h1 className="text-xl font-semibold text-blue-800">Roadmap</h1>
          <div className="m-auto py-5 px-10">
            <h2 className="text-xl text-blue-800">{data.name}</h2>
            <p className="text-md text-gray-800 my-3">{data.description}</p>
            <div className="flex items-center gap-3 w-full text-left my-3">
              <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
              <p>{data.author.name}</p>
              <div className="flex items-center gap-1">
                <OutlineHeartIcon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-500">120</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            {data.node_items.map((node) => (
              <div
                onClick={() => setCurrentNode(node)}
                key={node.id}
                className={`z-10 relative w-40 h-40 ${
                  currentNode.id === node.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                } rounded-full border-2 shadow-lg inline-flex items-center justify-center text-center p-2 hover:bg-blue-400 hover:text-white hover:shadow-2xl`}
              >
                <p className="text-sm">{node.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-screen overflow-y-scroll p-10 bg-blue-50">
        <div className="fixed z-10 left-3/5 bg-white w-2/5 h-auto p-5 shadow-xl rounded-md">
          <div className="py-3">
            <h3 className="text-xl font-semibold">{currentNode.name}</h3>
          </div>
          <div className="py-5">
            <p className="text-gray-700">{currentNode.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapId;
