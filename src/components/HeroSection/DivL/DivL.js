import { StyledCompareDiv, StyledHeroText } from "./DivL.styled";
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
import { StyledBox, StyledBoxWrapper, StyledShadowBox } from "./DivL.styled";
import StyledButton from "./StartSolvingButton";
export default function DivL() {
  return (
    <StyledHeroText>
      <StyledMadeP>Made in Collaboration with</StyledMadeP>
      {/* <StyledCollabDiv>
        <div>
          <StyledIITlogo />
          <StyledCollabText>Alumni of IIT Roorkee</StyledCollabText>
        </div>
        <div>
          <StyledCollabText>X</StyledCollabText>
        </div>
        <div>
          <StyledNSTlogo />
          <StyledCollabText>NST Coding Club</StyledCollabText>
        </div>
      </StyledCollabDiv> */}

      <StyledCollabDiv>
        <div className="collab-item">
          <StyledIITlogo />
          <StyledCollabText>Alumni of IIT Roorkee</StyledCollabText>
        </div>
        <div>
          <StyledCollabText>X</StyledCollabText>
        </div>
        <div className="collab-item">
          <StyledNSTlogo />
          <StyledCollabText>NST Coding Club</StyledCollabText>
        </div>
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
      <StyledButton />
      <StyledCompareDiv>
        <StyledCompareIcon></StyledCompareIcon>
        <StyledCompareSpan>
          Compare yourself with <span>5000+ </span>other JEE aspirants across
          India
        </StyledCompareSpan>
      </StyledCompareDiv>
      <Carousel></Carousel>
    </StyledHeroText>
  );
}
