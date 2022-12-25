import React, { useRef, useCallback, useContext } from 'react';

import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as  Yup from 'yup'

import { AuthContext } from '../../context/AuthContext';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErros';
interface SignUpFormData {
  email: string;
  password: string;
}

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, login } = useContext(AuthContext)
  console.log(user)

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      login({
        email: data.email,
        password: data.password,
    });
    } catch (err:any) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, [login]);

  return (
    <Container>
      <Content>
        <img src={logoImg} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça seu logon</h2>
          <Input name="email" icon={FiMail} type="text" placeholder='E-mail' />
          <Input name="password" icon={FiLock} type="password" placeholder='Senha' />
          <Button type="submit">Entrar</Button>

          <a href="#">Esqueci minha senha</a>
        </Form >
        
        <a href="#"><FiLogIn/> Criar conta</a>
      </Content>
      <Background />
    </Container>
)}

export default SigIn;