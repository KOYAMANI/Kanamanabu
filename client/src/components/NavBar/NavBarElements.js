import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import icon from '../../assets/noprofileimage.png'
import { 

  NavDropdown,
} from 'react-bootstrap';


export const NavLink = styled(Link)`
  color: #5a5a5a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f77879;
  }
`;

export const CustomNavDropdown = styled(NavDropdown)`
  drop: none;
`;

export const NavImage = styled.div`
  background-image: url(${icon});
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
`;