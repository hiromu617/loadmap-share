import type { NextPage } from "next";
import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { CurrentUserContext } from "../../src/context/CurrentUserContext";
import { StringLike } from "@firebase/util";

type NodeInput = {
  name: StringLike;
  description: string;
};

const RoadMapNew: NextPage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const router = useRouter();
  const [nodes, setNodes] = useState<NodeInput[]>([
    {
      name: "Unityチュートリアル",
      description: "unityチュートリアルでunityの基本を学びます",
    },
  ]);

  useEffect(() => {
    // ログインしていなければルートに返す
    if (!currentUser) {
      // router.push("/");
    }
  }, []);

  return (
    <div className="w-full min-h-screen dark:bg-gray-800">
      <div className="container mx-auto px−5 xl:px-64 py-10 h-full">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700">
            ロードマップのタイトル
          </label>
          <input
            className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Unity実践入門～環境構築から"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700">
            説明
          </label>
          <textarea
            className="w-full px-3 py-2 text-md h-32 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="unityに入門してから習得するまでのロードマップ"
          />
        </div>
        <div className="w-full mb-10">
          <h2 className="block mb-2 text-lg font-bold text-gray-700">ノード</h2>
          <div className="w-full bg-blue-50 p-5 mb-10">
            {nodes.map((node) => (
              <div className="w-full flex items-center justify-around">
                <div className="z-10 relative w-40 h-40 bg-white text-gray-800 rounded-full border-2 shadow-lg inline-flex items-center justify-center text-center p-2">
                  <p className="text-sm">{node.name}</p>
                </div>
                <div className="h-40 p-5 bg-white border-2">
                  <p>{node.description}</p>
                </div>
                <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  削除
                </button>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold text-gray-700">
              ノードのタイトル
            </label>
            <input
              className="w-full px-3 py-2 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Unityの教科書"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold text-gray-700">
              説明
            </label>
            <textarea
              className="w-full px-3 py-2 text-md h-32 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="「Unityの教科書」では3Dゲームの作り方を復習するとともに、2Dゲームの作り方を勉強しました。このテキストで学んだことは以下の点です。・RigidBodyによる衝突判定 ・スクリプトによるゲームの制御・AudioSourceの使い方 ・Animationの使い方主にUnity公式チュートリアルでは詳しく説明されていなかったコンポーネントのつけ方を学べる良テキストでした。"
            />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md">
            追加
          </button>
        </div>
        <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          作成
        </button>
      </div>
    </div>
  );
};

export default RoadMapNew;
