import styled from "styled-components";
import { NewtonLogoFull, NewtonLogoIcon } from "./Constants";
import { NSButton } from "@newtonschool/grauity";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.92vh 1.85vw 0.92vh 1.85vw;
  height: 6.5vh;
  width: 100%;
  position: sticky;
  border-bottom: 1px solid #e1e5ea;
  background-color: #ffffff;
`;

export const StyledNewtonLogoContainer = styled.div`
  display: block;
  padding-top: 0.81vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNewtonLogo = function () {
  return (
    <StyledNewtonLogoContainer>
      <img src={NewtonLogoFull} alt="Newton Logo" />
    </StyledNewtonLogoContainer>
  );
};

export const StyledNewtonLogoMobileContainer = styled.div`
  display: none;
  padding-top: 0.81vh;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledNewtonLogoMobile = function () {
  return (
    <StyledNewtonLogoMobileContainer>
      <img src={NewtonLogoIcon} alt="Newton Logo" />
    </StyledNewtonLogoMobileContainer>
  );
};

export const StyledSignUpButton = function () {
  return <NSButton>Sign Up</NSButton>;
};

export const StyledLeftDiv = styled.div`
  display: flex;
  color: #0673f9;
  align-items: center;
`;

export const StyledMiddleLine = styled.div`
  width: 0.06vw;
  height: 3.03vh;
  background-color: #e1e5ea;
  margin-left: 10px;
  margin-right: 10px;
`;
