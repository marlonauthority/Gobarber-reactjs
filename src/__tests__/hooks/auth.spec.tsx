import { renderHook } from '@testing-library/react-hooks';

import { AuthProvider, useAuth } from '../../hooks/AuthContext';

describe('Auth hook', () => {
  it('pode logar', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.login({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('johndoe@example.com');
  });
});