import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../hooks/AuthContext';
import api from '../../utils/apiClient'

const apiMock = new MockAdapter(api);


describe('Auth hook', () => {
  apiMock.onPost('sessions').reply(200, {
    user: {
      id: 'user-123',
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    token: 'token-123',
  });

  it('pode logar', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.login({
      email: 'johndoe@example.com',
      password: '123456',
    });

    await waitForNextUpdate();

    expect(result.current.user.email).toEqual('johndoe@example.com');
  });
});