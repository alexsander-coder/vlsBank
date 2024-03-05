import styled from "styled-components";

export const Container = styled.div`

grid-area: CT;
background-color: ${props => props.theme.color.secondary};
color: ${props => props.theme.color.black};
padding: 25px;
height: calc(100vh - 70px);
overflow-y: scroll;

::-webkit-scrollbar {
  width: 10px;
} 

`;