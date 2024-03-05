import styled from 'styled-components';

interface IContainerProps {
  lineColor: string;
}

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

`;

export const TitleContainer = styled.div<IContainerProps>`

> h3 {

  color: black;

  &::after {
  
    content: '';
    display: block;
    width: 40px;
    border-bottom: 4px solid ${props => props.lineColor};
  
  }
}
`;

export const Controllers = styled.div`
display: flex;
`;
