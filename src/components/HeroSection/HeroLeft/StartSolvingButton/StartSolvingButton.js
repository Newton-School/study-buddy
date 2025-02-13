"use client";

import { NSButton } from "@newtonschool/grauity";
import { StyledButtonDiv, StyledButtonText } from "./StartSolvingButton.styled";

export const StyledStartSolvingButton = () => {
  return (
    <StyledButtonDiv>
      <NSButton size="extra-large" type="button" variant="primary">
        <StyledButtonText>Start Solving PYQs</StyledButtonText>
      </NSButton>
    </StyledButtonDiv>
  );
};

export default StyledStartSolvingButton;
