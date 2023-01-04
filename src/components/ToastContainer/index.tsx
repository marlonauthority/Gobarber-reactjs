import React from 'react';

import Toast from './Toast'

import { ToastMessagesState } from '../../hooks/ToastContext';
import { Container } from './styles';
interface ToastContainerProps {
  messages: ToastMessagesState[]
}
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast 
          key={message.id}
          message={message}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;