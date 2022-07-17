import React from "react";
// import { FaReact, FaAngular } from "react-icons/fa";
import * as FontAwesome from "react-icons/fa";

const Icon = (props) => {
  const { iconName } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div>{icon}</div>;
};

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
            <Icon iconName={elem.icon} />
            <div className="pl-3">{elem.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
