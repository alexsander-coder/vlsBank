import React from "react";
import logo from '../../assets/vale-logo.png'
import Toggle from "../Toggle";
import { IoHome, IoCard } from 'react-icons/io5';
import { FaMoneyBillTransfer, FaHandHoldingDollar, FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6';
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
        <LogoImg src={logo} alt="Logo minha cateira" />
        {/* <Title>ValeShop</Title> */}
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <IoHome />
          Inicio
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaMoneyBillTransfer />
          Transferencias
        </MenuItemLink>
        <MenuItemLink href="#">
          <VscGraphLine />
          Graficos
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaHandHoldingDollar />
          Gastos
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaArrowUpLong />
          Entrada
        </MenuItemLink>
        <MenuItemLink href="#">
          <FaArrowDownLong />
          Saida
        </MenuItemLink>
        <MenuItemLink href="#">
          <IoCard />
          Cartoes
        </MenuItemLink>
        <MenuItemLink href="#">
          <IoNewspaper />
          Extrato
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
        <Toggle />
      </MenuContainer>
    </Container>
  )
}


export default Aside;