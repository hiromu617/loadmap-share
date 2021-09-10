import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="flex justify-center py-5 px-10 items-center border-t-2 border-gray-100 dark:border-gray-700">
        <p className="text-gray-500 text-xs md:text-md">2021 GITFU. All Rights Reserved.</p>
      </div>
    </div>
  );
};
