import styled from "styled-components";


export const Container = styled.div`
grid-area: AS;
background-color: ${props => props.theme.color.primary};
color: rgb(255, 239, 0);
padding-left: 20px;
border-right: 1px solid gray;
`;

export const Header = styled.div`
display: flex;
align-items: center;
margin: 0.2rem 0 0 1.3rem;
/* margin: 0.5rem 0 0 3.3rem; */
`;
export const LogoImg = styled.img`
width:120px;
height: 48px;
`;

export const Title = styled.h3``;

export const MenuContainer = styled.nav`
display: flex;
/* text-align: center; */
flex-direction: column;
margin-top: 35px;
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
  /* opacity: .5; */
  color: rgb(255, 239, 0);
}

> svg {
  font-size: 18.5px;
  margin-right: 6px;
}

`;