import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 18px;
  font-weight: 700;
  color: #2A363B;
  /* color: ${({ isActive }) => (isActive ? '#E84A5F' : '#2A363B')}; */

  &.active {
    color: #E84A5F;
  }
`;

export const Wraper = styled.div`
  margin-right: 50px;
`;


export const Nav = styled.nav`
  display: flex;
`;

export const WraperProfile = styled.div`
  align-items: center;
  display: flex;
  text-decoration: none;
  font-weight: 700;
`;

export const BtnLogout = styled.button`
  margin-right: 20px;
  margin-left: 20px;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  color: #2A363B;
`;

