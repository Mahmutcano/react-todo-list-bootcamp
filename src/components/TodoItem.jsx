import React from "react";


const TodoItem = ({todo}) => {

  return (
    <li className="flex justify-between items-center mx-5 p-2 mb-2 mt-2 border border-pink-300 rounded-xl text-black hover:bg-brand-pink text-sm">
      <small>{todo}</small>
    </li>
  );
};

export default TodoItem;
