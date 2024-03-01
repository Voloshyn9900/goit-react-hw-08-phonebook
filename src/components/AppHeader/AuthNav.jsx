import React from 'react';
import { StyledLink, Wraper } from './AppHeader.styled';

 
export default function AuthNav() {
  return (
    <Wraper>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Wraper>
  );
}
