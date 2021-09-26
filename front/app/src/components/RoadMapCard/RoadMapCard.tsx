import { VFC } from "react";
import Image from "next/image";
import Link from "next/link";
import { RoadMap } from "../../types/RoadMap";
import { User } from "../../types/User";

type Props = {
  roadmap: RoadMap;
  author: User;
};

export const RoadMapCard: VFC<Props> = ({ roadmap, author }) => {
  return (
    <Link key={roadmap.id} href={`/roadmap/${roadmap.id}`}>
      <div className="w-1/3">
        <div className="bg-white shadow-lg rounded-md mb-10 m-5 p-5">
          <div className="font-bold text-gray-600">{roadmap.name}</div>
          <div className="m-2 text-gray-600 ">{roadmap.description}</div>
          <Link href={`/user/${author.uid}`}>
            <div className="flex items-center gap-3">
              <img
                src={author.profile_image}
                alt={"profile_imgae"}
                className="rounded-full object-cover w-10 h-10"
              />
              <div className="flex items text-gray-600 ">
                {author.name}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Link>
  );
};
