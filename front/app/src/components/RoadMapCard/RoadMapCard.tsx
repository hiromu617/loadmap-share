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
      <div className="w-64">
        <div className="bg-white shadow-lg rounded-md">
          <div className="w-full rounded-lg">
            <Image
              alt="Road"
              width="350px"
              height="200px"
              objectFit="contain"
              className="rounded-lg"
              src={`/${roadmap.category}.png`}
            />
          </div>
          <div className="px-5 pb-5">
            <div className="font-bold text-gray-600 py-3">{roadmap.name}</div>
            <Link href={`/user/${author.uid}`}>
              <div className="flex items-center gap-3">
                <img
                  src={author.profile_image}
                  alt={"profile_imgae"}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div className="flex items text-gray-600 ">{author.name}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
