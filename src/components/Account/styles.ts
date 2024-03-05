import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 1px 5px;
  margin: 0 0;
  background-color: #f8f8f8;
  border-radius: 9px;
  height: 30px;
  border: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 6px 5px #004680;


  &:hover {
    border-color: #b3b3b3; 
    box-shadow: 0 0 5px 2px #005dab;

  }

  &:focus {
    outline: none;
    /* border-color: #4d90fe; */
     /* box-shadow: 20px 20px 50px grey; */

  }
`;
