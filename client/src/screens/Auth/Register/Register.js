import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions"

import MainScreen from '../../../components/MainScreen/MainScreen'
import { 
    Form, 
    Button, 
    Row, 
    Col } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { RegisterContainer } from './Register.styles';
import Loading from "../../../components/Loading/Loading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import OnboardingScreen from "../../../components/OnboardingScreen/OnboardingScreen";

const Register = () => {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState( 
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);

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
      if (password !== confirmpassword) {
        setMessage("Passwords do not match");
      } else {
        dispatch(register(name, email, password, pic))
      }

    }

    const postDetails = (pics) => {
        if(!pics){
          return setPicMessage('Please select an image');
        }
        setPicMessage(null);

        if(pics.type === 'image/jpeg'||
          pics.type === 'image/jpg'||
          pics.type === 'image/png' ){
          const formData = new FormData();
          formData.append('file', pics)
          formData.append('upload_preset', 'kanamanabu')
          formData.append('cloud_name', 'dd7crphfe')
          fetch('https://api.cloudinary.com/v1_1/dd7crphfe/image/upload',{
            method: 'POST',
            body: formData,
          }).then((res) => res.json())
            .then((formData) => {
            console.log(formData)
            setPic(formData.url.toString());
          }).catch((error) => {
            console.log(error);
          })
        } else{
          return setPicMessage('Image format must be jpeg or png');
        }
    };

    return (
        <OnboardingScreen title="Create your account">
        <RegisterContainer>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
  
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
  
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
  
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}
            <Form.Group controlId="pic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                onChange={(e) => postDetails(e.target.files[0])}
                type="file"
                size="small"
                custom
              />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/">Login</Link>
            </Col>
          </Row>
        </RegisterContainer>
      </OnboardingScreen>
    )
}

export default Register
