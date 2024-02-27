import React, { useState } from "react";
import Switch from 'react-switch';

import {
  Container,
  ToggleLabel,
  ToggleSelector
} from './styles'


const Toggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    console.log('light');
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={isChecked}
        uncheckedIcon={false}
        onChange={handleChange}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;