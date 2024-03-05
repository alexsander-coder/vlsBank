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
                boxShadow: `0 1px 100px ${item.bgColor}30`,
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

      {/* <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="black"
          size="1x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="black"
          size="1x"
        />
      </div> */}
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
