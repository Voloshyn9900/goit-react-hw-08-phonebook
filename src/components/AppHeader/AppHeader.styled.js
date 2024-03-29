import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

export const Logo = styled.h2`
  font-size: 2em;
  color: #fff;
  user-select: none;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  /* margin-top: auto;
  margin-bottom: auto; */
  position: relative;
  font-size: 1.1em;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s;
  }

  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:active::after,
  &.active::after {
    transform: scaleX(1);
    background-color: #fff; // Цвет бордера для активной ссылки
  }
`;

export const Wraper = styled.div`
  margin-right: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const WraperProfile = styled.div`
  align-items: center;
  display: flex;
  text-decoration: none;
  font-weight: 700;
`;

export const BtnLogout = styled.button`
  width: 130px;
  height: 50px;
  background: transparent;
  border: 2px solid #fff;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  margin-left: 40px;
  transition: 0.5s;

  &:hover {
    background: #fff;
    color: #162938;
  }
`;

export const UserName = styled.p`
  font-size: 1.1em;
  color: #fff;
  font-weight: 500;
  margin-left: 40px;
`;
