import React from "react";
import styles from "./SlideCover.module.css";

function SlideCover(props) {
  let left = "styles.main + styles.Left";

  return (
    <div className={left}>
      <h1 className={styles.Heading}>おかえりなさい</h1>
    </div>
  );
}

export default SlideCover;
