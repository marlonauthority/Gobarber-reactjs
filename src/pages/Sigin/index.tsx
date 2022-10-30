import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} />
      <form>
        <h2>Faça seu logon</h2>
        <input type="text" placeholder='E-mail' />
        <input type="password" placeholder='Senha' />
        <button type="submit">Entrar</button>

        <a href="#">Esqueci minha senha</a>
      </form>
      
      <a href="#"><FiLogIn/> Criar conta</a>
    </Content>
    <Background />
  </Container>
)

export default SigIn;