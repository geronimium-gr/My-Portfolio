import React from "react";

const List = ({ project }) => {
  return (
    <div className="pt-3">
      <ul className="bg-white rounded-lg border border-gray-200 w-auto text-gray-900">
        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-raisinBlack text-whitish">
          Languages and Plugins
        </li>
        {project.languages.map((elem) => (
          <li
            key={elem.id}
            className="flex flex-row items-center px-3 py-2 border-b border-gray-200 w-full"
          >
            {elem.icon}
            <div className="pl-3">{elem.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
