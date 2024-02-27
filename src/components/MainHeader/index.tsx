import React from "react";
import Toggle from "../Toggle";
import { Container, Profile, Welcome, UserName } from './styles';
import { StyledSelect } from "../Account/styles";
import Account from "../Account";


const MainHeader: React.FC = () => {
  return (
    <Container>
      {/* <Toggle /> */}
      <Account />

      <Profile>
        {/* welcome mudar cartao safira */}
        <Welcome>Olá, account.</Welcome>
        <UserName>Alexsander</UserName>
      </Profile>

    </Container>
  )
}


export default MainHeader;