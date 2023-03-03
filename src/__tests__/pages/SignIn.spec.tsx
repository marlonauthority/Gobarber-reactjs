import React from 'react'
import { render } from '@testing-library/react'
import SignIn from '../../pages/Sigin'

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
    Link: ({ children }:{ children: React.ReactNode }) => children
  }
})

describe('Pagina de Login', () => {
  it('Deve poder fazer login', () => {
    const { debug } = render(<SignIn />)

    debug()
  })
})

