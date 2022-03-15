import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../actions/userActions"
import { Link, useNavigate} from "react-router-dom";
import Loading from "../../Loading/Loading";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import styles from "./RegisterForm.module.css";
import Button from "../../../HTMLInteracters/Button/Button";
import Input from "../../../HTMLInteracters/TextInput/TextInput";

function RegisterForm() {

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  // const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;


  useEffect(() => {
    if(userInfo){
      history('/main')
    }
  }, [history, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password))
    }

  }

    return (
      <div className={styles.main}>
        <h1 className={styles.Heading}>Get Started</h1>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Username"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Repeat Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  
          />
          <Button text="Register" type="submit"/>
        </form>
      </div>
    );
  }
  
export default RegisterForm;