import styled from "styled-components";

interface ITagProps {
  color: string;
}

interface IContainerProps {
  amountColor: string;
}


export const Container = styled.div<IContainerProps>`
  /* background: rgb(255,255,230);
  background: linear-gradient(90deg, rgba(255,255,230,1) 0%, rgba(255,247,66,1) 49%, rgba(255,185,62,1) 100%); */
  background-color: white;
  list-style: none;
  display: flex;
  justify-content: space-between;
  color: black;
  box-shadow: 1px 1px 7px gray;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  align-items: center;
  cursor: pointer;
  transition: all .3s;
  position: relative;
  padding-left: 23px; 

&:hover {
  opacity: .9;
  color: black;
  transform: translateX(10px);
  background-color: rgb(234, 234, 234);
   & > div:first-child {
      box-shadow: 0px 0px 3px 1px ${({ amountColor }) => amountColor === 'red' ? 'rgb(255, 162, 162)' : 'rgb(149, 255, 149)'};
    }
}


> div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`;


export const Tag = styled.div<ITagProps>`
  width: 6.4px;
  height: 31px;
  background-color: ${({ color }) => color};
  position: absolute;
  left: 7px;
  border-radius: 2px;
`;