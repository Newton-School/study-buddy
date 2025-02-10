import React, { useState, useEffect } from "react";
import styled from "styled-components";

const slides = [
  { id: 1, text: "“ I love using #StudyBuddy for my JEE prep! ”" },
  { id: 2, text: "“It's so addictive, I solved 50 questions in one day 💪“" },
  {
    id: 3,
    text: "“Ranked #32 out of 16,200 students, thanks to Study Buddy 🏆“",
  },
  {
    id: 4,
    text: "“I and my friend solve PYQs together for 4-5 hours daily on Study Buddy 🤯“",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <SlidesWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <SlideText>{slide.text}</SlideText>
          </Slide>
        ))}
      </SlidesWrapper>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

// Styled Components with Media Queries
const CarouselContainer = styled.div`
  width: 424px;
  overflow: hidden;
  position: relative;
  margin: -10px 0 0 0;

  @media (max-width: 768px) {
    width: auto;
    margin: 0 20px;
  }
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 424px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 768px) {
    min-width: 320px;
  }
`;

const SlideText = styled.span`
  color: black;
  font-family: "Mona Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  font-style: italic;
`;

const DotsContainer = styled.div`
  text-align: center;
  margin-top: 0px;
`;

const Dot = styled.span`
  height: 6px;
  width: 6px;
  margin: 0 5px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "black" : "white")};
`;

export default Carousel;
