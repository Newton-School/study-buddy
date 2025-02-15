import styled from "styled-components";
import { NSIcon } from "@newtonschool/grauity";
import {
  IIT_Logo,
  List_Highlighted_Text_AIR,
  List_Highlighted_Text_JEE,
  NST_Logo,
  Student_Review_Icon,
} from "../HeroSection.constants";

export const StyledHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100vh;
  padding: 2vh 0 0 7vh;
  gap: 3vh;

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
  margin: -15px 0 -5vh 0;
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
    font-size: 7vw;
    line-height: 40px;
    text-align: center;
  }
`;

export const StyledHighLightedTextAIR = styled.span`
  background-image: url(${List_Highlighted_Text_AIR});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 80px;
  width: 7em;
  height: 2.5em;
  margin: 0 6px;
`;

export const StyledHighLightedTextJEE = styled.span`
  background-image: url(${List_Highlighted_Text_JEE});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 80px;
  width: 2em;
  height: 2.2em;
  margin: 0px;
`;

export const StyledFeatureList = styled.ul`
  list-style-type: none;
  margin-top: -3vh;
  li {
    display: flex;
    align-items: center;
    font-family: "Mona Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
    color: #009965;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 1.3vh;
  }
`;

export const StyledListIcon = () => {
  return (
    <NSIcon color="var(--text-primary)" name="check-badge-filled" size="24" />
  );
};

export const StyledIconWrapper = styled.span`
  margin-right: 8px;
  display: inline-flex;

  @media (max-width: 768px) {
    gap: 6px;
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
