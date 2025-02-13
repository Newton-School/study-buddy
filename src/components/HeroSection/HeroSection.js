import React from "react";
import { StyledHeroSection } from "./HeroSection.styled";
import HeroLeft from "./HeroLeft/HeroLeft";
import { StyledHeroRight } from "./HeroRight/HeroRight.styled";

function HeroSection() {
  return (
    <StyledHeroSection>
      <HeroLeft></HeroLeft>
      <StyledHeroRight></StyledHeroRight>
    </StyledHeroSection>
  );
}

export default HeroSection;
