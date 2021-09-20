import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// TODO: roadmap詳細
const RoadMapId: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex bg-yellow-50">
      <div className="w-1/2 min-h-screen p-5">
        <div className="px-10">
          <h1 className="text-xl font-semibold text-blue-800">Roadmap</h1>
          <div className="m-auto py-5 px-10">
            <h2 className="text-xl text-blue-800">
              Unity実践入門~環境構築から
            </h2>
            <div className="flex items-center gap-3 w-full text-left my-3">
              <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
              <p>作成者</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            {[0, 1, 2, 3, 4, 5].map(() => (
              <div className="z-10 relative w-40 h-40 bg-white rounded-full border-2 shadow-lg inline-flex items-center justify-center text-center p-2 hover:bg-blue-500 hover:text-white hover:shadow-2xl">
                <p className="text-sm">Unityチュートリアル</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-screen overflow-y-scroll p-10 bg-blue-50">
        <div className="fixed z-10 left-3/5 bg-white w-2/5 h-auto p-5 shadow-xl rounded-md">
          <div className="py-3">
            <h3 className="text-xl font-semibold">Unityの教科書</h3>
          </div>
          <div className="py-5">
            <p className="text-gray-700">
              Unityを初めて2,3か月経過後、「Unityの教科書」をテキストにした勉強を開
              始しました。Unity公式チュートリアルでは環境構築を終わらせ、簡単なブ
              ロック崩しゲームをつくることでUnity特有の3Dの操作には慣れてきました。
              「Unityの教科書」では3Dゲームの作り方を復習するとともに、2Dゲームの
              作り方を勉強しました。このテキストで学んだことは以下の点です。
              ・RigidBodyによる衝突判定 ・スクリプトによるゲームの制御
              ・AudioSourceの使い方 ・Animationの使い方
              主にUnity公式チュートリアルでは詳しく説明されていなかったコンポーネン
              トのつけ方を学べる良テキストでした。
              さらにこの時期に参考にした記事を追加します
              ・RigidBodyによる衝突判定
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapId;
