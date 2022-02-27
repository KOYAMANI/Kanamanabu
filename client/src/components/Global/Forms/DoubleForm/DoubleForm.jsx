import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import SlideCover from "../../../HTMLInteracters/SlideCover/SlideCover";
import styles from "./DoubleForm.module.css";

function DoubleForm() {
    return (
      <div className={styles.main}>
        <LoginForm />
        <RegisterForm />
        <SlideCover />
      </div>
    );
  }
  
export default DoubleForm;
  