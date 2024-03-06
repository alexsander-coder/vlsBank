import React, { useState } from "react";
import chipImage from '../../assets/cc-chip.svg'
import mastercardLogo from '../../assets/cc-mastercard.svg'
import visaLogo from '../../assets/cc-visa.svg'

interface SliderContentProps {
  id: number;
  bgColor: string;
  title: string;
  desc: string;
}


export default (props: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  const [selectedMovIndex, setSelectedMovIndex] = useState<null | number>(null);


  const [activeSlide, setActiveSlide] = useState(props.activeSlide);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);


  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };


  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const difference = startX - clientX;
    if (Math.abs(difference) > 50) {
      if (difference > 0) next();
      else prev();
      setIsDragging(false);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };


  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index: any) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-220px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(230px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-320px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(330px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const selectMovItem = (index: number) => {
    setSelectedMovIndex(index);
  };


  return (
    <>
      <div
        className="slideC"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseUp={handleEnd}
        onTouchEnd={handleEnd}

      >
        {props.data.map((item: any, i: any) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 10px 100px ${item.bgColor}30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>

      {showDetails && (
        <div className="grid-container">
          <div className="left-panel">
            <div className="card">
              <h3>Saldo</h3>
              <p>R$ {showBalance ? props.data[activeSlide].saldo : "*****"}</p>
              <button onClick={toggleBalanceVisibility}>{showBalance ? "Ocultar Saldo" : "Mostrar Saldo"}</button>
            </div>
            <div className="movimentacoes">
              <h3>Últimas Movimentações</h3>
              <div className="movimentacao-cards">
                {props.data && props.data[activeSlide] && props.data[activeSlide].movimentacoes && (
                  props.data[activeSlide].movimentacoes.map((mov: any, index: any) => (
                    <div
                      key={index}
                      className="movimentacao-card"
                      onClick={() => setSelectedMovIndex(index)}
                    >
                      <p>{mov.nome}: R$ {mov.valor}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {selectedMovIndex !== null && (
            <div className="detalhes-movimentacao">
              <h4>Detalhes da Movimentação</h4>
              <p>Movimentação: {props.data[activeSlide].movimentacoes[selectedMovIndex].nome}</p>
              <p>Valor: R$ {props.data[activeSlide].movimentacoes[selectedMovIndex].valor}</p>
              <p>Data: {props.data[activeSlide].movimentacoes[selectedMovIndex].data}</p>
            </div>
          )}
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Esconder Detalhes' : 'Mostrar Detalhes'}
      </button>

    </>
  );
};



const SliderContent: React.FC<SliderContentProps> = ({ id, bgColor, title, desc }) => {
  const isVisa = id !== 3 && id !== 5 && id !== 1;
  const logoPath = isVisa ? visaLogo : mastercardLogo;

  return (
    <section className="cc" style={{ background: bgColor, userSelect: 'none' }}>
      <div className="cc-logo">
        <span><img src={chipImage} alt="Chip do cartão" /></span>
        <span><img src={logoPath} alt={isVisa ? "Logo Visa" : "Logo Mastercard"} /></span>
      </div>

      <div className="cc-info">
        <div className="label">Número do cartão</div>
        <div className="cc-number">{desc}</div>

        <div className="cc-holder">
          <div className="label">Nome do titular</div>
          <div className="value">{title}</div>
        </div>
      </div>
    </section>
  );
};