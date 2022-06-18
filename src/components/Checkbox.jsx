import React from 'react'

const Checkbox = (props) => {
  return (
    <div className="flex items-center">
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label
      htmlFor={props.htmlFor}
      className="ml-2 block text-sm text-gray-900"
    >
      {props.title}
    </label>
  </div>
  )
}

export default Checkbox