import React from 'react';
import { StyledSelect } from './styles';

const Account: React.FC = () => {
  const generateRandomNumber = () => {
    const random_number = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    const random_number_str = random_number.toString();
    return `${random_number_str.substring(0, 6)}******${random_number_str.substring(random_number_str.length - 4)}`;
  };

  const option1 = generateRandomNumber();
  const option2 = generateRandomNumber();

  return (
    <div>
      <StyledSelect>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </StyledSelect>
    </div>
  );
};

export default Account;