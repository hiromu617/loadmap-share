import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Img from "../public/main.png";
import useSWR from "swr";
import axios from "../src/libs/axios";
import { RoadMap } from "../src/types/RoadMap";
import { RoadMapCard } from "../src/components/RoadMapCard/RoadMapCard";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  const { data: roadmaps, error } = useSWR(`/api/v1/roadmaps.json`, fetcher);

  if (!roadmaps) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>An error occured</h1>;
  }

  return (
    <div className="w-full h-full bg-blue-50 pb-40">
      <div className="w-full h-96">
        <div className="absolute top-52 text-center w-full z-20">
          <h1 className="filter text-gray-800 text-7xl font-bold drop-shadow-xl">
            Road For Tomorrow
          </h1>
          <h2 className="filter text-gray-700 text-3xl font-semibold mt-5 drop-shadow-lg">
            未来に続く道を探せ
          </h2>
        </div>
        <Image
          alt="Road"
          layout="fill"
          objectFit="cover"
          src={Img}
          className="z-10"
        />
      </div>
      <div className="w-5/6 bg-white rounded-3xl py-16 mb-24 px-14 mx-auto relative z-10 top-40">
        <div className="flex bottom-auto items-center">
          <div className="flex items-end text-3xl p-2 text-blue-600">
            Gallery
          </div>
          <p className="ml-2 text-gray-600 text-sm">ロードマップ一覧</p>
        </div>
        <div className="border-solid flex flex-wrap justify-around gap-5 mt-5">
          {roadmaps.map((roadmap: RoadMap) => (
            <RoadMapCard roadmap={roadmap} author={roadmap.author} />
          ))}
           <div className="w-60"></div>
           <div className="w-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
