import React from "react";
import { StyledHeroSection } from "./page.styled";
import DivL from "./DivL/DivL";
import DivR from "./DivR/DivR";
function HeroSection() {
  return (
    <StyledHeroSection>
      <DivL></DivL>
      {/* <DivR></DivR> */}
    </StyledHeroSection>
  );
}

export default HeroSection;
