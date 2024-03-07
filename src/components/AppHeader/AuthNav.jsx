import React from 'react';
import { StyledLink, Wraper } from './AppHeader.styled';

export default function AuthNav() {
  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </>

    // <Wraper>
    //   <StyledLink to="/register">Registration</StyledLink>
    //   <StyledLink to="/login">Login</StyledLink>
    // </Wraper>
  );
}
