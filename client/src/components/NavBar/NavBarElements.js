import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import icon from '../../assets/noprofileimage.png'
import {
  NavDropdown,
} from 'react-bootstrap';

export const Nav = styled.nav`
  background: #A8A8A8;
  height: 70px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CustomNavDropdown = styled(NavDropdown)`
  color: black;
`;

export const NavImage = styled.div`
  background-image: url(${icon});
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
`;