import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* transform: scale(0); */
  transition: transform 0.5s ea;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

export const TitleText = styled.h2`
  font-size: 2em;
  color: #162938;
  text-align: center;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #162938;
  margin: 30px 0;
`;

export const BtnRegistration = styled.button`
  width: 100%;
  height: 45px;
  background: #162938;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  color: #fff;
  font-weight: 500;
`;

export const SpanIcon = styled.span`
  visibility: inherit;
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #162938;
  line-height: 57px;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #162938;
  font-weight: 600;
  padding: 0 35px 0 5px;

  
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #162938;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;

  top: ${props => (props.$filled ? '-5px' : '50%')};

  ${Input}:focus ~ & {
    top: -5px;
  }
`;

