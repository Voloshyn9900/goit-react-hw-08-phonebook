import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 420px;
  height: 600px;
  margin-left: 200px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* transform: scale(0); */
  transition: transform 0.5s;
  overflow: hidden;
`;

export const WrapperInput = styled.div`
  position: relative;
  width: 90%;
  height: 240px;
  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  /* backdrop-filter: blur(20px); */
  /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* overflow: hidden; */
  /* transform: scale(0); */
  transition: transform 0.5s;
`;

