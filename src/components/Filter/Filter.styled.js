import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  margin-top: 20px;
`;

export const FilterLabel = styled.label`
  position: relative;
  display: block;
  font-size: 1em;
  color: #162938;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  border: 2px solid #162938;
  border-radius: 6px;
  outline: none;
  font-size: 1em;
  color: #162938;
  font-weight: 600;
  padding: 0 10px;

  &:focus {
    border-color: #224057;
  }
`;
