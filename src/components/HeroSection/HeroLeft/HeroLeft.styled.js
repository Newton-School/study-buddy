import styled from "styled-components";
import {
  IIT_Logo,
  NST_Logo,
  Student_Review_Icon,
} from "../HeroSection.constants";

export const StyledHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100vh;
  padding: 3vh 0 0 3vh;
  gap: 3.4vh;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 0;
    padding: 4vh 0 0 0;
    gap: 2.4vh;
  }
`;

export const StyledCollaborationPara = styled.p`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #5b6271;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    line-height: 18%;
  }
`;

export const StyledCollabDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin: -20px 0 0 0;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
  }
`;

export const StyledCollabItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledIITlogo = styled.div`
  background-image: url(${IIT_Logo});
  background-size: cover;
  width: 32px;
  height: 32px;
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const StyledNSTlogo = styled.div`
  background-image: url(${NST_Logo});
  background-size: cover;
  width: 20px;
  height: 26px;
  @media (max-width: 768px) {
    width: 17px;
    height: 22px;
  }
`;

export const StyledCollabText = styled.span`
  font-family: "Mona Sans", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28.8px;
  letter-spacing: 0.1px;
  color: #16191d;

  @media (max-width: 768px) {
    font-size: 3.4vw;
  }
`;

export const StyledH1 = styled.h1`
  font-family: "Mona Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 600;
  color: #000;
  font-size: 40px;
  line-height: 48px;
  span {
    color: #0673f9;
    font-size: 40px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 38px;
    }
  }
  @media (max-width: 768px) {
    font-size: 8vw;
    line-height: 40px;
    text-align: center;
  }
`;

export const StyledBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledShadowBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 7.12px;
  background-color: #005c3d;
  transform: rotate(2.45deg);
  z-index: 0;
`;

export const StyledBox = styled.div`
  border-radius: 7.12px;
  border: 0.89px solid #005c3d;
  padding: 3.02px 6.04px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  gap: 7.56px;
  transform: rotate(-2.45deg);
  background-color: #009965;
  color: white;
  line-height: 140%;
  position: relative;
  z-index: 1;
`;

export const StyledFeatureList = styled.ul`
  list-style-type: none;
  li {
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 180%;
    letter-spacing: 0.5px;
    color: #009965;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const StyledCompareDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledCompareSpan = styled.span`
  font-family: "Mona Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #16191d;
  display: inline-block;
  max-width: calc(100% - 64px);
  word-break: break-word;

  span {
    color: #0673f9;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: left;
  }
`;

export const StyledCompareIcon = styled.div`
  height: 24px;
  width: 56px;
  background-image: url(${Student_Review_Icon});
  background-size: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 24px;
    width: 56px;
  }
`;
