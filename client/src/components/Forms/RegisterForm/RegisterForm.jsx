import React from "react";
import styles from "./RegisterForm.module.css";
import Button from "../../HTMLInteractables/Button/Button";
import Input from "../../HTMLInteractables/TextInput/TextInput";

function RegisterForm() {
    return (
      <div className={styles.main}>
        <h1 className={styles.Heading}>Get Started</h1>
        <form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Email" />
          <Input placeholder="Repeat Email" />
          <Button text="Register" />
        </form>
      </div>
    );
  }
  
export default RegisterForm;