import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch';
import dark from '../../styles/themes/dark';


export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
`;

export const ToggleLabel = styled.span``;

const themez = {
  colors: {
    info: '#ffd700',
  }
};

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: dark.color.warning,
    offColor: themez.colors.info
  })) <ReactSwitchProps>`
  margin: 0 7.5px;
  `;