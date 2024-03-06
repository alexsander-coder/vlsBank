import React from "react";
import logo from '../../assets/vale-logo.png'
// import Toggle from "../Toggle";
import { IoHome, IoCard } from 'react-icons/io5';
import { FaMoneyBillTransfer, FaHandHoldingDollar, FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PiCardholderFill } from "react-icons/pi";
import { MdOutlineCreditCardOff } from 'react-icons/md'
import { IoNewspaper } from 'react-icons/io5'
import { GoPasskeyFill } from 'react-icons/go'
import { RxExit } from "react-icons/rx";
import { VscGraphLine } from 'react-icons/vsc';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';


const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/home">
          <LogoImg src={logo} alt="Logo Vale Shop" />
        </Link>
        {/* <Title>Vale Shop</Title> */}
      </Header>

      <MenuContainer>
        <MenuItemLink as={Link} to="/home">
          <IoHome />
          Início
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaMoneyBillTransfer />
          Transferências
        </MenuItemLink>
        <MenuItemLink as={Link} to="/graphics">
          <VscGraphLine />
          Gráficos
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaHandHoldingDollar />
          Gastos
        </MenuItemLink>
        <MenuItemLink as={Link} to="/list/entry-balance">
          <FaArrowUpLong />
          Entrada
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaArrowDownLong />
          Saída
        </MenuItemLink>
        <MenuItemLink href="#">
          <IoCard />
          Cartões
        </MenuItemLink>
        <MenuItemLink href="#">
          <IoNewspaper />
          Transações
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdOutlineCreditCardOff />
          Bloquear cartão
        </MenuItemLink>
        <MenuItemLink href="#">
          <GoPasskeyFill />
          Alterar Senha
        </MenuItemLink>
        <MenuItemLink href="#">
          <PiCardholderFill />
          Contas
        </MenuItemLink>
        <MenuItemLink href="#">
          <RxExit />
          Sair
        </MenuItemLink>
        {/* <Toggle /> */}
      </MenuContainer>
    </Container>
  )
}


export default Aside;