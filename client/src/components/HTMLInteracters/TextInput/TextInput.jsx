import React from "react";
import styles from "./TextInput.module.css";

function TextInput(props) {
  return (
    <div className={styles.main}>
      <input
        className={styles.Input}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value} 
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
