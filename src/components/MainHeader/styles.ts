import styled from "styled-components";

export const Container = styled.div`
grid-area: MH;
background-color: ${props => props.theme.color.tertiary};
display: flex;
color: white;
justify-content: space-between;
align-items: center;
padding: 0 12px;
border-bottom: 1px solid rgb(255, 239, 0);
`;

export const Profile = styled.div`
display: flex;
`;

export const UserName = styled.span`
`;

export const Welcome = styled.h4`
`;