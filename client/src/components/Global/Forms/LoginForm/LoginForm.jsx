import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from "react-router-dom";
import { login } from "../../../../actions/userActions"
import styles from "./LoginForm.module.css";
import Button from "../../../HTMLInteracters/Button/Button";
import Input from "../../../HTMLInteracters/TextInput/TextInput";

function LoginForm() {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    // const userInfo = localStorage.getItem('userInfo')
      if (userInfo) {
       history('/main');
      }
  }, [userInfo, history]);

  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.Heading}>Welcome back</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" type="submit"/>
      </form>
    </div>
  );
}

export default LoginForm;
