import {
  StyledCompareDiv,
  StyledCompareSpan,
  StyledHeroText,
} from "./DivL.styled";
import { StyledCollabDiv } from "./DivL.styled";
import { StyledMadeP } from "./DivL.styled";
import { StyledIITlogo } from "./DivL.styled";
import { StyledCollabText } from "./DivL.styled";
import { StyledNSTlogo } from "./DivL.styled";
import { StyledH1 } from "./DivL.styled";
import { StyledFeatureList } from "./DivL.styled";
import { NSIcon } from "@newtonschool/grauity";
import { NSButton } from "@newtonschool/grauity";
import { StyledCompareIcon } from "./DivL.styled";
import { StyledCompareSpan } from "./DivL.styled";
import Carousel from "./Carousel";

export default function DivL() {
  return (
    <StyledHeroText>
      <StyledMadeP>Made in Collaboration with</StyledMadeP>
      <StyledCollabDiv>
        <StyledIITlogo></StyledIITlogo>
        <StyledCollabText>Alumni of IIT Roorkee</StyledCollabText>
        <StyledCollabText>X</StyledCollabText>
        <StyledNSTlogo></StyledNSTlogo>
        <StyledCollabText>NST Coding Club</StyledCollabText>
      </StyledCollabDiv>
      <StyledH1>
        Solve 00000+ PYQs on
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
          Practice previous year JEE Mains questions
        </li>
        <li>Solve PYQs subject-wise and year-wise</li>
        <li>See your All India Rank among JEE aspirants</li>
      </StyledFeatureList>

      <NSButton variant="primary">Start Solving PYQs</NSButton>
      <StyledCompareDiv>
        <StyledCompareIcon></StyledCompareIcon>
        <StyledCompareSpan>
          Compare yourself with 5000+ other JEE aspirants across India
        </StyledCompareSpan>
      </StyledCompareDiv>
      <Carousel></Carousel>
    </StyledHeroText>
  );
}
