import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: #ff9000;
  color: #312e38;
  height: 56px;
  border-radius: 10px;
  border:0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  &:hover {
    background: ${shade(0.12, '#ff9000')};
    transition: 0.5s background;
  }
`;
