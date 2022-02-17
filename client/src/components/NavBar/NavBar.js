import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { logout } from '../../actions/userActions'
import {
    Nav,
    NavLink,
    CustomNavDropdown,
} from './NavBarElements';
import {
    NavDropdown,
} from 'react-bootstrap';
import icon from '../../assets/noprofileimage.png'
import { MenuItem } from "@material-ui/core";

export const NavBar = () => {

    const history = useNavigate();
    const location = useLocation();

    console.log(location)

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo }= userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        localStorage.removeItem('userInfo');
        history('/');
    }

    return (
        (location.pathname !== '/')?
        <Nav className="ms-auto">
            <NavLink to='/'>
                Kanamanabu
            </NavLink>
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

                <MenuItem>
                    <NavLink to='/account'>Account</NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='/editprofile'>Edit Profile</NavLink>
                </MenuItem>
                <NavDropdown.Divider />
                <MenuItem onClick={logoutHandler}>
                    <NavLink to='/'>Log out</NavLink>
                </MenuItem>
            </CustomNavDropdown>
        </Nav>:<div></div>
    )
}

export default NavBar;