import React from "react";
import styles from "./TextInput.module.css";

function TextInput(props) {
  return (
    <div className={styles.main}>
      <input className={styles.Input} placeholder={props.placeholder} />
    </div>
  );
}

export default TextInput;
