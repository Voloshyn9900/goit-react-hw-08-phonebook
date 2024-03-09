import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  width: 460px;
  /* height: 800px; */
  justify-content: center;
  align-items: center;
  margin-left: 45%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  /* transform: scale(0); */
  transition: transform 0.5s;
  overflow: hidden;
`;

export const WrapperInput = styled.div`
  position: relative;
  width: 90%;
  height: 240px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: transform 0.5s;
`;

export const WrapperContacts = styled.div`
  position: relative;
  width: 90%;
  height: 240px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: transform 0.5s;
`;

export const FilterWrapper = styled.div`
  width: 90%;
  border-radius: 10px;
  padding: 20px;
`;
