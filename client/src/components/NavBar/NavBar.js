import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { logout } from '../../actions/userActions'
import {  NavLink, CustomNavDropdown } from './NavBarElements';
import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
} from 'react-bootstrap';
import icon from '../../assets/noprofileimage.png'

export const NavBar = () => {

    const history = useNavigate();
    const location = useLocation();

    const [hide, setHide] = useState(false);
    console.log(location)

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo }= userLogin;

    useEffect(() => {
        if(location.pathname === '/') setHide(true);
    }, [])

    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem('userInfo');
        history('/');
    }

    return (
        (!hide)?
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to = "/">kanamanabu</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                < Nav className='m-auto' />
                {userInfo ? 
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll 
                >
                    <Nav.Link>
                        <NavLink to = "/quizcategory">Contents</NavLink>
                    </Nav.Link>
                    <CustomNavDropdown title={
                        <img src={
                            userInfo.pic?
                            userInfo.pic:
                            icon
                        }
                        alt='profile icon'
                    
                        width={45}
                        height={45} 
                        />}
                    id="navbarScrollingDropdown">
                    <NavDropdown.Divider />  
                    <Nav.Link>
                        <NavLink to = "/account">Account</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to = "/editprofile">Edit Profile</NavLink>
                    </Nav.Link>              
                    <Nav.Link> 
                        <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                        </NavDropdown.Item>
                    </Nav.Link>
                    </CustomNavDropdown>
                </Nav> :
                //if user is not logged in
                <Nav>
                    <Nav.Link>
                        <NavLink to = "/login">Login</NavLink>
                    </Nav.Link>
                </Nav>
                }
                
                </Navbar.Collapse>
            </Container>
        </Navbar>: <div></div>
    )
}

export default NavBar;