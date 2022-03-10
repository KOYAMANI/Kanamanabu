import React from "react";
import styles from "./TextInput.module.css";

function TextInput(props) {
  return (
      <input
        className="m-1 w-full py-2 outline-none appearance-none px-1 focus:outline-1 bg-gray-200 text-gray-800 placeholder-gray-500 border-1 focus:border-gray-800 rounded-sm"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value} 
        onChange={props.onChange}
      />
  );
}

export default TextInput;
