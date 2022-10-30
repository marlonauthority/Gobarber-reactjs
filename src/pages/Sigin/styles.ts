import styled from 'styled-components';
import bg from '../../assets/sign-in-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 231px;
    height: 134px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
    }

    input {
      background-color: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border:2px solid #232129;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
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
    }
    
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
        transition: color 0.2s;
      }
    }
  }

  > a {
    color: #ff9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2;

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
        transition: color 0.2;
      }
  }
`;
export const Background = styled.div`
  flex:1;
  background: url(${bg}) no-repeat center;
  background-size: cover;
`;
