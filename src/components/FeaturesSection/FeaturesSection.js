"use client";
import React from "react";
import {
  StyledSection,
  StyledFeatureCard,
  StyledIcon,
  StyledContent,
  StyledFeatureImage,
  StyledIconContentWrapper,
  StyledSectionFlexWrapper,
  StyledHeadingTextUpper,
  StyledTextOpacity,
  StyledHeading,
  StyledSpannedContent,
  StyledCenteredDiv,
  StyledSpan,
  StyledPageWrapper,
} from "./FeatureSection.Styled";
import { Features } from "./Constants";
import StyledStartSolvingButton from "../HeroSection/HeroLeft/StartSolvingButton/StartSolvingButton";

export const FeaturesSection = () => {
  return (
    <>
      <StyledPageWrapper>
        <StyledSectionFlexWrapper>
          <StyledHeadingTextUpper>
            <StyledTextOpacity>
              WELCOME TO THE OUTCOME POWERHOUSE
            </StyledTextOpacity>
            <StyledHeading>
              WHY CHOOSE{" "}
              <StyledSpannedContent>
                JEE STUDY BUDDY <StyledSpan>?</StyledSpan>
              </StyledSpannedContent>
            </StyledHeading>
          </StyledHeadingTextUpper>
          <StyledSection>
            {Features.map((feature, index) => (
              <StyledFeatureCard key={feature.id} $index={index}>
                <StyledFeatureImage
                  desktopBgImage={feature.BgImage}
                  mobileBgImage={feature.MobileBgImage}
                />
                <StyledIconContentWrapper>
                  <StyledIcon src={feature.icon} alt={feature.title} />
                  <StyledContent>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </StyledContent>
                </StyledIconContentWrapper>
              </StyledFeatureCard>
            ))}
          </StyledSection>
          <StyledCenteredDiv>
            <StyledStartSolvingButton />
          </StyledCenteredDiv>
        </StyledSectionFlexWrapper>
      </StyledPageWrapper>
    </>
  );
};
