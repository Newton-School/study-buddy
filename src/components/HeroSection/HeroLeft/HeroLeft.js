import {
  StyledHeroLeft,
  StyledCollaborationPara,
  StyledIITlogo,
  StyledNSTlogo,
  StyledCollabDiv,
  StyledCollabText,
  StyledH1,
  StyledFeatureList,
  StyledCompareDiv,
  StyledCompareIcon,
  StyledCompareSpan,
  StyledBox,
  StyledBoxWrapper,
  StyledShadowBox,
  StyledCollabItem,
} from "./HeroLeft.styled";
import { NSIcon } from "@newtonschool/grauity";
import Carousel from "./Carousel/Carousel";
import StyledStartSolvingButton from "./StartSolvingButton/StartSolvingButton";
import NumberIncrement from "@/components/NumberIncrement/NumberIncrement";

export default function HeroLeft() {
  return (
    <StyledHeroLeft>
      <StyledCollaborationPara>
        Made in Collaboration with
      </StyledCollaborationPara>

      <StyledCollabDiv>
        <StyledCollabItem>
          <StyledIITlogo />
          <StyledCollabText>Alumni of IIT Roorkee</StyledCollabText>
        </StyledCollabItem>
        <div>
          <StyledCollabText>X</StyledCollabText>
        </div>
        <StyledCollabItem>
          <StyledNSTlogo />
          <StyledCollabText>NST Coding Club</StyledCollabText>
        </StyledCollabItem>
      </StyledCollabDiv>

      <StyledH1>
        Solve <NumberIncrement/>+ PYQs on
        <br />
        <span>JEE Study Buddy</span>
      </StyledH1>

      <StyledFeatureList>
        <li>
          <NSIcon
            color="var(--text-primary)"
            name="check-badge-filled"
            size="32"
          />
          Practice previous year{" "}
          <StyledBoxWrapper>
            <StyledShadowBox />
            <StyledBox>JEE Mains</StyledBox>
          </StyledBoxWrapper>{" "}
          questions
        </li>
        <li>Solve PYQs subject-wise and year-wise</li>
        <li>
          See your{" "}
          <StyledBoxWrapper>
            <StyledShadowBox />
            <StyledBox>All India Rank</StyledBox>
          </StyledBoxWrapper>{" "}
          among JEE aspirants
        </li>
      </StyledFeatureList>

      <StyledStartSolvingButton />

      <StyledCompareDiv>
        <StyledCompareIcon></StyledCompareIcon>
        <StyledCompareSpan>
          Compare yourself with <span>5000+ </span>other JEE aspirants across
          India
        </StyledCompareSpan>
      </StyledCompareDiv>

      <Carousel></Carousel>
    </StyledHeroLeft>
  );
}
