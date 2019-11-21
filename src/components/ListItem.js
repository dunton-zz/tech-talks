import React from "react";

const ListItem = props => {
  const { name, instructor, isActive, clickHandler, index } = props;
  const handleClick = () => {
    clickHandler(index);
  };
  return (
    <li
      className={`list-group-item mt-2 text-center ${isActive}`}
      onClick={handleClick}
    >
      {name} | {instructor}
    </li>
  );
};

export default ListItem;
