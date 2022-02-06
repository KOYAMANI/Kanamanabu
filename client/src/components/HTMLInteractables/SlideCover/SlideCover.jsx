import React, { useState } from "react";
import styles from "./SlideCover.module.css";

function SlideCover(props) {

const [left, setLeft] = useState(true);

  return (
    <div className={(left ? styles.Left : styles.Right) + " " + styles.main}>
      <h1 className={styles.Heading}>おかえりなさい</h1>
      <button onClick={() => setLeft(!left)}>Already Account</button>
    </div>
  );
}

export default SlideCover;
