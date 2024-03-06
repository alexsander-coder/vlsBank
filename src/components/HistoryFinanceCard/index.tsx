import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  tagColor,
  title,
  subTitle,
  amount
}) => {

  const amountColor = amount.startsWith('-') ? 'red' : 'green';

  return (
    <Container amountColor={amountColor}>
      <Tag color={amountColor} />
      <div>
        <strong>{title}</strong>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  )
}

export default HistoryFinanceCard;