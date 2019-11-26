import React from "react";

const TodoItem = props => {
  const { removeItem, itemKey, task } = props;
  return (
    <li className="list-group-item" onClick={e => removeItem(itemKey)}>
      {task}
    </li>
  );
};

export default TodoItem;
