import React from "react";
import Toggle from "../Toggle";
import { Container, Profile, Welcome, UserName } from './styles';
import { StyledSelect } from "../Account/styles";
import { useLocation } from 'react-router-dom';
import Account from "../Account";


const MainHeader: React.FC = () => {
  const location = useLocation();
  return (
    <Container>
      <div style={{ visibility: location.pathname === '/home' ? 'hidden' : 'visible' }}>
        <Account />
      </div>

      <Profile>
        <Welcome>Olá, account.</Welcome>
        <UserName>Alexsander</UserName>
      </Profile>
    </Container>
  );
};


export default MainHeader;