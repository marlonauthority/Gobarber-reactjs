import React, { useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as  Yup from 'yup'

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErros';
interface SignUpFormData {
  email: string;
  password: string;
}

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useNavigate()
  const { login } = useAuth()
  const { addToast } = useToast()

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

      await login({
        email: data.email,
        password: data.password,
    });
    history('/dashboard')
    } catch (err:any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque suas credenciais'
      })
    }
  }, [login, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Faça seu logon</h2>
            <Input name="email" icon={FiMail} type="text" placeholder='E-mail' />
            <Input name="password" icon={FiLock} type="password" placeholder='Senha' />
            <Button type="submit">Entrar</Button>

            <Link to="/reset-password">Esqueci minha senha</Link>
          </Form >
        
          <Link to="/cadastrar"><FiLogIn/> Criar conta</Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
)}

export default SigIn;