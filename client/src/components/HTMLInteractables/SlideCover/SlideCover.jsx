import React, { useState } from "react";
import styles from "./SlideCover.module.css";

function SlideCover(props) {

const [left, setLeft] = useState(true);

const leftHeading = "KanaManaBu";
const leftSubheading = "For beginners and intermediates";
const leftSwitch = "Already have an Account? ";
const leftSwitchButton = "Log In";

const rightHeading = "おかえりなさい";
const rightSubheading = "Welcome back!";
const rightSwitch = "Don't have an Account? ";
const rightSwitchButton = "Register";

  return (
    <div className={(left ? styles.Left : styles.Right) + " " + styles.main}>
      <h1 className={styles.Heading}>{left ? leftHeading : rightHeading}</h1>
      <h2 className={styles.SubHeading}>{left ? leftSubheading : rightSubheading}</h2>
      <p className={styles.Switch}>{left ? leftSwitch : rightSwitch}<a className={styles.SwitchButton} onClick={() => setLeft(!left)}>{left ? leftSwitchButton : rightSwitchButton}</a></p>
    </div>
  );
}

export default SlideCover;
