import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../actions/userActions"
import { Link, useNavigate} from "react-router-dom";
import Loading from "../../Loading/Loading";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Button from "../../../HTMLInteracters/Button/Button";
import Input from "../../../HTMLInteracters/TextInput/TextInput";

function RegisterForm(props) {

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
      history('/contents')
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
      <div className={(props.visible ? "inline-grid" : "hidden") + " place-content-center lg:inline-grid w-full lg:w-1/2 h-4/5 bg-gray-100"}>
        <div className="w-full absolute bg-red-500 z-10 text-white p-1 truncate lg:w-1/2 empty:hidden py-2">{message}</div>
        <h1 className="m-2 lg:m-8 text-gray-800 absolute text-xl lg:text-2xl">Get Started</h1>
        <form onSubmit={submitHandler} className="grid gap-3">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
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
          <p className="block lg:hidden text-center hover:underline" onClick={props.switcher}>Already have an Account?</p>

        </form>
      </div>
    );
  }
  
export default RegisterForm;