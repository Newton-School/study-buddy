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
  StyledCollabItem,
  StyledListIcon,
  StyledIconWrapper,
  StyledHighLightedTextJEE,
  StyledHighLightedTextAIR,
} from "./HeroLeft.styled";
import Carousel from "./Carousel/Carousel";
import StyledStartSolvingButton from "./StartSolvingButton/StartSolvingButton";
import NumberIncrement from "@/components/NoIncrement/NumberIncrement";

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
        Solve <NumberIncrement />+ PYQs on
        <br />
        <span>JEE Study Buddy</span>
      </StyledH1>

      <StyledFeatureList>
        <li>
          <StyledIconWrapper>
            <StyledListIcon />
          </StyledIconWrapper>
          Practice previous year
          <StyledHighLightedTextJEE />
          questions
        </li>
        <li>
          <StyledIconWrapper>
            <StyledListIcon />
          </StyledIconWrapper>
          Solve PYQs subject-wise and year-wise
        </li>
        <li>
          <StyledIconWrapper>
            <StyledListIcon />
          </StyledIconWrapper>
          See your <StyledHighLightedTextAIR />
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
