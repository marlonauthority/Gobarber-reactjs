import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import SignIn from '../../pages/Sigin'

const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedHistoryPush,
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../hooks/AuthContext', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

jest.mock('../../hooks/ToastContext', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});


describe('Pagina de Login', () => {
  it('Deve poder vizualizar página de login', () => {
    const { debug } = render(<SignIn />)
    debug()
  })

  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });   
})

  describe('SignIn Page', () => {
     
})

