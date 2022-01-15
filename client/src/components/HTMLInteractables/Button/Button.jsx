import React from "react";
import styles from "./Button.module.css";

function LoginButton(props){
    return (
        <button className={styles.button}>
            {props.text}
        </button>
    )
}

export default LoginButton;