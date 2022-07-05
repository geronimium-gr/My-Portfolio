import React from "react";
import { FaReact, FaAngular } from "react-icons/fa";

const List = () => {
  return (
    <div className="pt-3">
      <ul className="bg-white rounded-lg border border-gray-200 w-auto text-gray-900">
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-raisinBlack text-whitish">
          Languages and Plugins
        </li>
        <li className="flex flex-row items-center px-3 py-2 border-b border-gray-200 w-full">
          <FaAngular />
          <div className="pl-3">Angular Framework</div>
        </li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">
          A third item
        </li>
        <li className="px-6 py-2 border-b border-gray-200 w-full">
          A fourth item
        </li>
        <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
      </ul>
    </div>
  );
};

export default List;
