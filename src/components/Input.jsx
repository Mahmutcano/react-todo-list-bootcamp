import React from "react";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {props.title}
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        required
        className={
          "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
        }
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
