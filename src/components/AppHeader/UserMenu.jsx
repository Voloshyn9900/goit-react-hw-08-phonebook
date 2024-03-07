import React from 'react';
import { StyledLink } from './AppHeader.styled';

export const UserMenu = () => {
  return <>
  <StyledLink to="/">Home</StyledLink>
  <StyledLink to="/contacts">Contacts</StyledLink>;
  </>
};
