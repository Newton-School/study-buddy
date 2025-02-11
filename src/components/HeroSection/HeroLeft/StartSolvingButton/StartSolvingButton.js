"use client";

import { NSButton } from "@newtonschool/grauity";
import { StyledButtonDiv, StyledButtonText } from "./StartSolvingButton.styled";

export const StyledStartSolvingButton = () => {
  return (
    <StyledButtonDiv>
      <NSButton
        ariaLabel="button"
        className="my-class"
        icon="sparkle"
        iconPosition="left"
        iconSize="24"
        onClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        size="extra-large"
        style={{
          color: "",
        }}
        tabIndex={0}
        tooltip="button"
        type="button"
        variant="primary"
      >
        <StyledButtonText>Start Solving PYQs</StyledButtonText>
      </NSButton>
    </StyledButtonDiv>
  );
};

export default StyledStartSolvingButton;
