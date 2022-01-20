import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from "react-router-dom";
import { login } from "../../../actions/userActions"

import { LoginContainer } from './Login.styles'
import OnboardingScreen from '../../../components/OnboardingScreen/OnboardingScreen'
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { 
  Form, 
  Button, 
  Row, 
  Col } from "react-bootstrap";

import LoginButton from "../../../components/HTMLInteractables/Button/Button";

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
        <OnboardingScreen title="Login">

        <LoginContainer>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <form onSubmit={submitHandler}>

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
  
            <LoginButton text="Submit" type="submit"></LoginButton>

          </form>
          <Row className="py-3">
            <Col>
              Don't have an account ? <Link to="/register">Register Here</Link>
            </Col>
          </Row>

        </LoginContainer>
        
      </OnboardingScreen>
    )
}
export default Login