import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi'
import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment, Section, Appointment,  } from './styles';
import lgoImage from '../../assets/logo.svg'
import { useAuth } from '../../hooks/AuthContext';

const appointments = [
  {
    id: '1',
    url: 'https://github.com/marlondenisck.png',
    name: 'Marlon',
    time: '08:00',
  },
  {
    id: '2',
    url: 'https://github.com/marlondenisck.png',
    name: 'Marlon',
    time: '09:00',
  },
  {
    id: '3',
    url: 'https://github.com/marlondenisck.png',
    name: 'Marlon',
    time: '10:00',
  },
];
const Dashboard: React.FC = () => {
  const { logout, user } = useAuth()
  const [selectedDate, setSelectedDate] = useState(new Date());

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

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dias 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="" alt="" />
              <strong>Marlon</strong>
              <span>
                <FiClock /> 08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            {appointments.map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.time}
                </span>
                <div>
                  <img src={appointment.url} alt={appointment.name} />
                  <strong>{appointment.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>
          <Section>
            <strong>Tarde</strong>
            {appointments.map(appointment => (
              <Appointment key={appointment.id}>
                <span>
                  <FiClock />
                  {appointment.time}
                </span>
                <div>
                  <img src={appointment.url} alt={appointment.name} />
                  <strong>{appointment.name}</strong>
                </div>
              </Appointment>
            ))}
          </Section>

        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
}

export default Dashboard;