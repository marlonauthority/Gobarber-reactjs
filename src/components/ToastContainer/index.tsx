import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { ToastMessagesState, useToast } from '../../hooks/ToastContext';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessagesState[]
}
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast()

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} hasDescription={!!message.description} type={message.type}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description ? (<p>{message.description}</p>): null}
          </div>
          <button type="button" onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </button>
      </Toast>
      ))}

      
    </Container>
  );
}

export default ToastContainer;