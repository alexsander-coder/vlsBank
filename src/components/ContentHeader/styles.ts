import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

`;

export const TitleContainer = styled.div`

> h3 {

  color: black;

  &::after {
  
    content: '';
    display: block;
    width: 40px;
    border-bottom: 4px solid rgb(255, 76, 76);
  
  }
}
`;

export const Controllers = styled.div`
display: flex;
`;
