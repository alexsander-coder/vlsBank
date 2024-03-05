// src\pages\Home\index.tsx
import React, { useState } from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import Carousel from '../../components/Carousel/Slider';
import InfoCard from '../../components/InfoCard';
import data from '../../components/Carousel/data';
import '../../components/Carousel/style.css';

const Home: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(data[0]);

  const handleCardChange = (card: any) => {
    setSelectedCard(card);
  };

  return (
    <Container>
      {/* <ContentHeader title="Home" lineColor="rgb(255, 76, 76)"> */}
      {/* </ContentHeader> */}
      <Carousel data={data} activeSlide={2} onCardChange={handleCardChange} />
      <InfoCard />
    </Container>
  );
};

export default Home;
