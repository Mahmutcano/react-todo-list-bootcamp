import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-pink hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {props.icon}
        </span>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
