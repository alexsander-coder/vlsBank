import React from "react";
import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../SelectInput";

const options = [
  { value: '1', label: 'Opção 1' },
  { value: '2', label: 'Opção 2' },
];

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h3>Extrato</h3>
      </TitleContainer>
      <Controllers>
        <SelectInput options={options} />
        <SelectInput options={options} />
      </Controllers>
    </Container>
  )
}

export default ContentHeader;