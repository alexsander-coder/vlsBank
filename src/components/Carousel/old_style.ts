import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh;  */
`;

export const SlideContainer = styled.div`
  position: relative;
  perspective: 430px;
  transform-style: preserve-3d;
  width: 250px;
  height: 162px;
  margin: 9px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Slide = styled.div`
  width: 250px;
  height: 158px;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
  position: absolute;
  top: 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const Reflection = styled.div`
  position: absolute;
  width: 101%;
  height: 35px;
  bottom: -30px;
  border-radius: 12px;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s, visibility 500ms ease 0s;
`;


export const CreditCard = styled.section`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  color: #fff;

  &:hover {
  
  }
`;

