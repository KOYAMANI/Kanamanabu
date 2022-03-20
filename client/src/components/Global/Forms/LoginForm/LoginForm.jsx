import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from "react-router-dom";
import { login } from "../../../../actions/userActions"
import Button from "../../../HTMLInteracters/Button/Button";
import Input from "../../../HTMLInteracters/TextInput/TextInput";

function LoginForm(props) {

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
    <div className={(props.visible ? "inline-grid" : "hidden") + " place-content-center lg:inline-grid w-full lg:w-1/2 h-4/5 bg-gray-100"}>
      <h1 className="m-8 text-gray-800 absolute text-2xl">Welcome back</h1>
      <form onSubmit={submitHandler} className="grid gap-4">
        {/* TODO: BORDER BOX */}
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
        <p className="block lg:hidden text-center hover:underline" onClick={props.switcher}>Need an Account?</p>

      </form>
    </div>
  );
}

export default LoginForm;
