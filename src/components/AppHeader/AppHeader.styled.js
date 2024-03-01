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
