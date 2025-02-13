"use client";
import React, { useState, useEffect } from "react";
import {
  StyledCarouselContainer,
  StyledSlidesWrapper,
  StyledSlide,
  StyledSlideText,
  StyledDotsContainer,
  StyledDot,
} from "./Carousel.styled";
import { SlideTexts } from "./Carousel.constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledCarouselContainer>
      <StyledSlidesWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SlideTexts.map((slide) => (
          <StyledSlide key={slide.id}>
            <StyledSlideText>{slide.text}</StyledSlideText>
          </StyledSlide>
        ))}
      </StyledSlidesWrapper>
      <StyledDotsContainer>
        {SlideTexts.map((_, index) => (
          <StyledDot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </StyledDotsContainer>
    </StyledCarouselContainer>
  );
};

export default Carousel;
