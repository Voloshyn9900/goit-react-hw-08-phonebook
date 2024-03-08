import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ListContainer = styled.ul`
  max-height: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px; /* Ширина скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #162938;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Фон трека (фона, где находится ползунок) */
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #162938;
  padding: 10px 0;
  margin-right: 6px;
  font-size: 1em;
  font-weight: 600;
  color: #162938;
`;

export const ItemText = styled.span``;

export const BtnDel = styled.button`
  background-color: #f67280;
  color: #fff;
  border: none;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  outline: none;
  padding: 4px 8px;
  font-size: 0.9em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e63c3c;
  }
`;
