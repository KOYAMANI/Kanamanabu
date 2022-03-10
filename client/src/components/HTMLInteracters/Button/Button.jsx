import React from "react";

function Button(props) {
  return <button className="w-full border-box m-1 bg-gray-800 px-6 py-2.5 text-white rounded-sm hover:bg-gray-700 " type={props.type}>{props.text}</button>;
}

export default Button;
