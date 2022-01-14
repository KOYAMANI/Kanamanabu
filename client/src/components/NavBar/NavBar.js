import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
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

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo }= userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem('userInfo');
        history('/');
    }

    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to = "/">Home</NavLink>
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
                        <NavLink to = "/">Login</NavLink>
                    </Nav.Link>
                </Nav>
                }
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;