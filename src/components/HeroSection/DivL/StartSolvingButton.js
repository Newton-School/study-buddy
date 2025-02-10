"use client";

import { NSButton } from "@newtonschool/grauity";
import styled from "styled-components";

export const StyledButtonDiv = styled.div`
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const StyledButtonText = styled.span`
  width: 240px;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.4px;
`;
export const StyledButton = () => {
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

export default StyledButton;
