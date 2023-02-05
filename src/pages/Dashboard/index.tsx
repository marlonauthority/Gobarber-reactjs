import React from 'react';
import { FiPower } from 'react-icons/fi'
import { Container, Header, HeaderContent, Profile, } from './styles';
import lgoImage from '../../assets/logo.svg'
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { logout, user } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={lgoImage} alt="Gobarber v3" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>          
          </Profile>
          <button type="button" onClick={logout}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
}

export default Dashboard;