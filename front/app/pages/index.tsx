import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Img from "../public/main.png";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import axios from "../src/libs/axios";
import { RoadMap } from "../src/types/RoadMap";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  const { data: roadmaps, error } = useSWR(`/api/v1/roadmaps`, fetcher);

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
          <h1 className="filter text-white text-7xl font-bold drop-shadow-xl">
            Road For Tomorrow
          </h1>
          <h2 className="filter text-white text-3xl font-semibold mt-5 drop-shadow-lg">
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
        <div className="border-solid flex flex-wrap content-center">
          {roadmaps.map((roadmap: RoadMap) => (
            <Link key={roadmap.id} href={`/roadmap/${roadmap.id}`}>
              <div className="w-1/3">
                <div className="bg-white shadow-lg rounded-md mb-10 m-5 p-5">
                  <div className="font-bold text-gray-600">{roadmap.name}</div>
                  <div className="m-2 text-gray-600 ">
                    {roadmap.description}
                  </div>
                  <div className="flex right-0">
                    <img
                      src={roadmap.author.profile_image}
                      alt={"profile_imgae"}
                      className="rounded-full object-cover w-10 h-10"
                    />
                    <div className="flex items text-gray-600 ">
                      {roadmap.author.name}
                    </div>
                    <div className="flex items">
                      <div>
                        <div className="text-gray-600 ">120</div>
                        <div className="text-gray-600 ">
                          {roadmap.created_at}
                        </div>
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
