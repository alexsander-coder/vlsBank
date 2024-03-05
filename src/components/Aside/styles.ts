import styled from "styled-components";


export const Container = styled.div`
grid-area: AS;
background-color: ${props => props.theme.color.primary};
color: rgb(255, 239, 0);
padding-left: 25px;
border-right: 1px solid gray;
`;

export const Header = styled.div`

/* display: flex; */
/* align-items: center; */
/* margin: 0.2rem 0 0 1.3rem; */
/* margin: 0.5rem 0 0 3.3rem; */
margin: 3px 17px;

`;

export const LogoImg = styled.img`
width: 118px;
height: 47px;
`;

export const Title = styled.h3`
/* color: white;
margin-left: 1.2rem; */
`;

export const MenuContainer = styled.nav`
display: flex;
/* text-align: center; */
flex-direction: column;
margin-top: 30px;
`;

export const MenuItemLink = styled.a`
/* color: ${props => props.theme.color.info}; */
color: white;
text-decoration: none;
transition: opacity .3s;
display: flex;
align-items: center;
margin: 8.5px 0;

&:hover {
  /* opacity: .8; */
  color: rgb(255, 239, 0);
  /* box-shadow: 0px 0px 9px 1px orange;
  border-radius: 8px; */
}

> svg {
  font-size: 18.5px;
  margin-right: 6px;
}

`;