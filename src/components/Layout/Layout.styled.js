import styled from 'styled-components';
import backgroundImage from '../../images/background.jpg';

export const Body = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  background-position: center;
`;