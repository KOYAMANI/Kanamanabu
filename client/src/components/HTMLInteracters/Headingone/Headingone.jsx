import React from "react";
import styles from "./Headingone.module.css";

function Headingone(props) {

    return (
        <h1 className={styles.headingone}>
            {props.text}
        </h1>
    )
}

export default Headingone;