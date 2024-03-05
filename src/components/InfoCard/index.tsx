import React from 'react';
import { Container } from './styles';

// interface InfoCardProps {
//   card: {
//     saldo: number;
//     ultMov: string[];
//     valorUltMov: string[];
//   };
// }

const InfoCard: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Saldo: R$</h2>
        <h3>Últimas Transações:</h3>

        <ul>
        </ul>

      </div>
    </Container>
  );
};

export default InfoCard;