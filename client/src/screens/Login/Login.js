import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,} from "react-router-dom";
import { loading, login } from "../../actions/userActions"

import { LoginContainer } from './Login.styles'
import OnboardingScreen from '../../components/OnboardingScreen/OnboardingScreen'
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { 
  Form, 
  Button, 
  Row, 
  Col } from "react-bootstrap";

const Login = ({}) => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        // const userInfo = localStorage.getItem('userInfo')
          if (userInfo) {
           history('/contents');
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
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
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
