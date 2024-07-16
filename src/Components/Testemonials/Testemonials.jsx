import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width:80%;
  margin:auto;
  
`;

const CardContainer = styled.div`
  display: flex;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  gap:1.5rem;
`;

const Card = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background:white;
  color:black;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

const NavigationButton = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const cards = [
    {
      id: 1,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateTwo.png', '../../src/assets/images/quateOne.png']
    },
    {
      id: 2,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']   
    },
    {
      id: 3,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']   
    },
    {
      id: 4,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes  ',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']   
    },
    {
      id: 5,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']    },
    {
      id: 6,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']
    },
    {
      id: 7,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']
    },
    {
      id: 8,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes ',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']
    },
    {
      id: 9,
      text: 'Je suis arrivée chez la wild avec la conviction que le design est ma vocation professionnelle. Nous sommes une petite promo qui se soutient beaucoup et cela me permet de rester très motivée et gagner confiance en moi pour réussir !',
      images: ['../../src/assets/images/quateOne.png', '../../src/assets/images/quateTwo.png']
    }
  ];

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % cards.length);
      setIsVisible(true);
    }, 1000); 
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 3 + cards.length) % cards.length);
      setIsVisible(true);
    }, 1000); 
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <SliderContainer>
      <CardContainer isVisible={isVisible}>
        {visibleCards.map(card => (
          <Card key={card.id}>
            <CardText>{card.text}</CardText>
            {card.images.map((image, index) => (
              <CardImage key={index} src={image} alt={`quote ${index + 1}`} />
            ))}
          </Card>
        ))}
      </CardContainer>
      <div>
        <NavigationButton onClick={handlePrev}>Previous</NavigationButton>
        <NavigationButton onClick={handleNext}>Next</NavigationButton>
      </div>
    </SliderContainer>
  );
}
