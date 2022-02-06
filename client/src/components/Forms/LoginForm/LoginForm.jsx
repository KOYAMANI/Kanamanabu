import React from "react";
import styles from "./LoginForm.module.css";
import Button from "../../HTMLInteractables/Button/Button";
import Input from "../../HTMLInteractables/TextInput/TextInput";

function LoginForm() {
  return (
    <div className={styles.main}>
      <h1 className={styles.Heading}>Welcome back</h1>
      <form>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button text="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
