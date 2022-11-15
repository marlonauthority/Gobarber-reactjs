import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './styles';

import Input from '../../components/Input'
import Button from '../../components/Button'

const SigUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} />
      <form>
        <h2>Faça seu cadastro</h2>
        <Input name="nome" icon={FiUser} type="text" placeholder='Nome' />
        <Input name="email" icon={FiMail} type="text" placeholder='E-mail' />
        <Input name="password" icon={FiLock} type="password" placeholder='Senha' />
        <Button type="submit">Cadastrar</Button>

      </form>
      
      <a href="#"><FiArrowLeft /> Voltar logon</a>
    </Content>
    
  </Container>
)

export default SigUp;