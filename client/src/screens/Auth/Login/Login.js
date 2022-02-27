import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from "react-router-dom";
import { login } from "../../../actions/userActions"
import styles from "./Login.module.css";
import wallpaper from "../../../assets/fuji_bw.png";

import { Heading, LoginContainer } from './Login.styles'
import OnboardingScreen from '../../../components/Global/Layouts/OnboardingScreen/OnboardingScreen'
import Loading from "../../../components/Global/Loading/Loading";
import ErrorMessage from "../../../components/Global/ErrorMessage/ErrorMessage";
import { 
  Form, 
  Button, 
  Row, 
  Col } from "react-bootstrap";

import LoginButton from "../../../components/HTMLInteracters/Button/Button";
import Headingone from "../../../components/HTMLInteracters/Headingone/Headingone";

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        // const userInfo = localStorage.getItem('userInfo')
          if (userInfo) {
           history('/quizcategory');
          }
      }, [userInfo, history]);


    const submitHandler = async(e) => {
      e.preventDefault();
      dispatch(login(email, password))
    }

    return (
        <div className={styles.parentContainer}>
            <img
                className={styles.wallpaper}
                src={wallpaper}
                alt="Wallpaper"
            ></img>
        <div className={styles.backDiv}>
        <div className={styles.loginDiv}>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}

          <Headingone text="おかえりなさい"></Headingone>
          <form onSubmit={submitHandler} className={styles.loginForm}>

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <LoginButton text="Login" type="submit"></LoginButton>

          </form>



        </div>
        <div className={styles.registerDiv}>
          <Headingone text="KanaManabu"></Headingone>
            <p>
              Don't have an account? <Link to="/register">Register Here</Link>
            </p>
        </div>
        </div>

        
      </div>
    )
}
export default Login;