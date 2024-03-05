import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

*, button, input {
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #005dab;
    border-radius: 3px;
  }

  /* 
    background de dentro do scroll 
  ::-webkit-scrollbar-track {
    background-color: white;
  } */
`;