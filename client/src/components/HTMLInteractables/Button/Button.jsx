import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return <button className={styles.Button} type={props.type}>{props.text}</button>;
}

export default Button;
