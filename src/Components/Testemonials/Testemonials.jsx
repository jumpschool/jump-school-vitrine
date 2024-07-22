import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 80%;
  margin: auto;
  
  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: white;
  color: black;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 5px;
    padding: 15px;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  margin-top: 28px;
  margin-bottom: 17px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const CardImageTopLeft = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    top: 5px;
    left: 5px;
  }
`;

const CardImageBottomRight = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    bottom: 5px;
    right: 5px;
  }
`;

const NavigationButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 5px;
    padding: 8px;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${props => (props.isActive ? '#D9D9D9' : '#ccc')};
  border: 1px solid white;
  padding: 2px;
  border-radius: 50%;
  display: inline-block;
`;


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cards = [
    {
      id: 1,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 2,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 3,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 4,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes  ',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 5,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 6,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 7,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 8,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 9,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    }
  ];

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + getVisibleCardCount()) % cards.length);
      setIsVisible(true);
    }, 1000);
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - getVisibleCardCount() + cards.length) % cards.length);
      setIsVisible(true);
    }, 1000);
  };

  const getVisibleCardCount = () => {
    if (windowWidth <= parseInt(breakpoints.mobile)) {
      return 1;
    } else if (windowWidth <= parseInt(breakpoints.tablet)) {
      return 2;
    } else {
      return 3;
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + getVisibleCardCount());

  const getTotalIndicatorCount = () => {
    return Math.ceil(cards.length / getVisibleCardCount());
  };

  const getCurrentIndicatorIndex = () => {
    return Math.floor(currentIndex / getVisibleCardCount());
  };

  return (
    <SliderContainer>
      <CardContainer isVisible={isVisible}>
        {visibleCards.map(card => (
          <Card key={card.id}>
            <ImageContainer>
              <CardImageTopLeft src={card.images[0]} alt={`quote ${card.id}-1`} />
              <CardImageBottomRight src={card.images[1]} alt={`quote ${card.id}-2`} />
            </ImageContainer>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardContainer>
      <div className='flex items-center'>
        <NavigationButton onClick={handlePrev}>
          <img src="../../src/assets/images/LeftArrow.png" alt="Previous" className="w-[10px]" />
        </NavigationButton>
        <Indicators>
          {Array.from({ length: getTotalIndicatorCount() }).map((_, index) => (
            <Indicator
              key={index}
              isActive={index === getCurrentIndicatorIndex()}
            />
          ))}
        </Indicators>
        <NavigationButton onClick={handleNext}>
          <img src="../../src/assets/images/RightArrow.png" alt="Next" className="w-[10px]" />
        </NavigationButton>
      </div>
    </SliderContainer>
  );
}
