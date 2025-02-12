import styled from "styled-components";
import { NSButton } from "@newtonschool/grauity";

export const StyledSection = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledFeatureCard = styled.div`
  display: none;
  @media (min-width: 768px) {
    justify-self: ${(props) => (props.$index % 2 === 0 ? "end" : "start")};
    background: #ffffff;
    border-radius: 16px;
    padding: 10px 0px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border: 2px solid #f0f0f0;
    width: 36.37vw;
    height: 28vh;
    overflow: hidden;
  }
`;

export const StyledMobileFeatureCard = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border: 1px solid #e1e5ea;
    border-radius: 12px;
    flex-direction: column;
    width: 80vw;
    height: 30vh;
    padding: 10px;
    justify-content: space-between;
  }
`;

export const StyledIcon = styled.img`
  width: 3.17vw;
  height: 5.6vh;
  align-self: left;
  @media (max-width: 768px) {
    width: 30%;
    height: 70%;
    margin-bottom: 4.5%;
  }
`;

export const StyledContent = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    font: Mona Sans;
    line-height: 24px;
    color: #16191d;
    margin-bottom: 2px;
  }
  p {
    font-size: 14px;
    color: #5b6271;
    font-weight: 500px;
    line-height: 19.2px;
  }
`;

export const StyledFeatureImage = styled.div`
  width: 36.37vw;
  height: 28vh;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const StyledIconContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7vh;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0px;
    align-items: end;
    height: 70px;
  }
`;

export const StyledTextOpacity = styled.h6`
  color: #8c95a6;
  margin-bottom: 1.2vh;
`;

export const StyledHeading = styled.h2`
  line-height: 5.04vh;
  margin-bottom: 2.5vh;
  @media (max-width: 768px) {
    line-height: 3.04vh;
  }
`;

export const StyledSpannedContent = styled.span`
  color: #0673f9;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2.5vh;
  }
`;

export const StyledSpan = styled.span`
  color: black;
`;

export const StyledPara = styled.div`
  line-height: 3.34vh;
  font-weight: 500;
  margin-bottom: 6vh;
`;
export const StyledHeadingText = styled.h4`
  margin-bottom: 2.55vh;
  font-size: 25px;
`;

export const StyledParaText = styled.p`
  color: #5b6271;
  font-size: 18px;
`;

export const StyledSolvePyqButton = function () {
  return <NSButton>Start Solving PYQs</NSButton>;
};

export const StyledSectionFlexWrapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;

export const StyledCenteredDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledHeadingTextUpper = styled.div`
  padding: 4.64vh 12.5vw 0vh 12.9vw;
`;

export const StyledTextlower = styled.div`
  padding: 4.64vh 12.5vw 9.29vh 12.9vw;
  gap: 5.57vh;
  text-align: left;
`;
