import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// TODO: roadmap一覧
const Home: NextPage = () => {
  return (
    <div>
      {[0, 1, 2, 3, 4].map((id) => (
        <Link key={id} href={`/roadmap/${id}`}>
          <div className="bg-blue-500 w-20 h-10 mb-10">{id}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
