import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 600px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto;

  border: 8px solid #4caf50;
  border-radius: ${props => props.theme.radii.md};
`;


export const PhoneBook = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  color: #162938;
  text-align: center;
`;
