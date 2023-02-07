import React, { useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as  Yup from 'yup'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'
import getValidationErrors from '../../utils/getValidationErros';
import api from '../../utils/apiClient';
import { useToast } from '../../hooks/ToastContext';
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const SigUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast()

  const history = useNavigate()

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/users', data)
      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Você já pode fazer login'
      })
      history('/')
    } catch (err:any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer cadastro, cheque suas credenciais'
      })
    }
  }, [addToast,history]);

  return (
    <Container>
    <Background />
    <Content>
      <img src={logoImg} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Faça seu cadastro</h2>
        <Input name="name" icon={FiUser} type="text" placeholder='Nome' />
        <Input name="email" icon={FiMail} type="text" placeholder='E-mail' />
        <Input name="password" icon={FiLock} type="password" placeholder='Senha' />
        <Button type="submit">Cadastrar</Button>

      </Form>
      
      <Link to="/"><FiArrowLeft /> Voltar login</Link>
    </Content>
    
  </Container>
  )
}

export default SigUp;